import json
import logging
from pathlib import Path
from typing import Dict, List

import joblib
import numpy as np
from backend.medicine_db import DISEASE_DB

logger = logging.getLogger(__name__)

ROOT = Path(__file__).resolve().parent.parent
MODEL_DIR = ROOT / 'models'
MODEL_PATH = MODEL_DIR / 'best_model.pkl'
SYMPTOM_ENCODER_PATH = MODEL_DIR / 'symptom_encoder.pkl'
LABEL_ENCODER_PATH = MODEL_DIR / 'label_encoder.pkl'
SYMPTOM_LIST_PATH = MODEL_DIR / 'symptom_list.json'

model = None
symptom_encoder = None
label_encoder = None
symptom_list = []
model_name = 'rule-based-v1'


def load_artifacts() -> None:
    global model, symptom_encoder, label_encoder, symptom_list, model_name
    model = None
    symptom_encoder = None
    label_encoder = None
    symptom_list = []
    model_name = 'rule-based-v1'

    if SYMPTOM_LIST_PATH.exists():
        with SYMPTOM_LIST_PATH.open('r', encoding='utf-8') as f:
            symptom_list = json.load(f)

    if SYMPTOM_ENCODER_PATH.exists() and LABEL_ENCODER_PATH.exists() and MODEL_PATH.exists():
        try:
            symptom_encoder = joblib.load(SYMPTOM_ENCODER_PATH)
            label_encoder = joblib.load(LABEL_ENCODER_PATH)
            model = joblib.load(MODEL_PATH)
            model_name = model.__class__.__name__
        except Exception as e:
            logger.warning("Failed to load ML artifacts: %s — falling back to rule-based", e)
            symptom_encoder = None
            label_encoder = None
            model = None
            model_name = 'rule-based-v1'


def get_symptoms() -> List[str]:
    if symptom_list:
        return sorted(symptom_list)
    return sorted({s for info in DISEASE_DB.values() for s in info.get('symptoms', [])})


def get_disease_info(name: str) -> Dict:
    normalized = name.strip().lower()
    for disease, info in DISEASE_DB.items():
        if disease.lower() == normalized:
            return info
    return {}


def get_all_diseases() -> List[Dict]:
    result = []
    for disease, info in DISEASE_DB.items():
        result.append({
            'name': disease,
            'category': info.get('category'),
            'emergency_level': info.get('emergency_level'),
            'icd_code': info.get('icd_code'),
            'specialist': info.get('specialist'),
            'symptoms': info.get('symptoms', [])[:5],
        })
    return sorted(result, key=lambda x: x['name'])


def get_categories() -> Dict:
    categories: Dict[str, Dict] = {}
    for disease, info in DISEASE_DB.items():
        cat = info.get('category', 'Other')
        if cat not in categories:
            categories[cat] = {'count': 0, 'diseases': []}
        categories[cat]['count'] += 1
        categories[cat]['diseases'].append(disease)
    for cat in categories:
        categories[cat]['diseases'].sort()
    return dict(sorted(categories.items()))


def _build_metadata(disease_info: Dict) -> Dict:
    return {
        'emergency_level': disease_info.get('emergency_level', 'low'),
        'category': disease_info.get('category'),
        'specialist': disease_info.get('specialist'),
        'icd_code': disease_info.get('icd_code'),
        'risk_factors': disease_info.get('risk_factors', []),
    }


def rule_based_predict(symptoms: List[str]) -> Dict:
    scores = []
    input_set = {s.lower().strip() for s in symptoms if s}
    for disease, info in DISEASE_DB.items():
        disease_set = {s.lower() for s in info.get('symptoms', [])}
        if not disease_set:
            continue
        intersect = input_set.intersection(disease_set)
        score = len(intersect) / len(disease_set)
        scores.append((disease, score))
    scores.sort(key=lambda x: x[1], reverse=True)
    top = [(d, s) for d, s in scores if s > 0][:3]
    if not top:
        return {
            'predicted_disease': None,
            'confidence': 0.0,
            'model_name': model_name,
            'description': '',
            'matched_symptoms': [],
            'top_3': [],
            'top_3_with_scores': [],
            'medicines': [],
            'precautions': [],
            'diet': [],
            'emergency_level': None,
            'category': None,
            'specialist': None,
            'icd_code': None,
            'risk_factors': [],
        }

    predicted = top[0][0]
    confidence = round(top[0][1] * 100.0, 2)
    disease_info = get_disease_info(predicted)

    # Fix: re-derive disease set for the winning disease
    predicted_disease_set = {s.lower() for s in disease_info.get('symptoms', [])}
    matched = sorted(input_set.intersection(predicted_disease_set))

    top_3_with_scores = [
        {'disease': d, 'confidence': round(s * 100.0, 2)}
        for d, s in top
    ]

    return {
        'predicted_disease': predicted,
        'confidence': confidence,
        'model_name': model_name,
        'description': disease_info.get('description', ''),
        'matched_symptoms': matched,
        'top_3': [d for d, _ in top],
        'top_3_with_scores': top_3_with_scores,
        'medicines': disease_info.get('medicines', []),
        'precautions': disease_info.get('precautions', []),
        'diet': disease_info.get('diet', []),
        **_build_metadata(disease_info),
    }


def predict(symptoms: List[str]) -> Dict:
    if model is None or symptom_encoder is None or label_encoder is None:
        return rule_based_predict(symptoms)

    sanitized = [s.strip().lower() for s in symptoms if s]
    if not sanitized:
        return rule_based_predict(symptoms)

    try:
        X = symptom_encoder.transform([sanitized])
        proba = model.predict_proba(X)[0]
        top_idx = np.argsort(proba)[::-1][:3]
        top_3 = [label_encoder.inverse_transform([int(i)])[0] for i in top_idx]
        confidence = round(float(proba[top_idx[0]]) * 100.0, 2)
        predicted = top_3[0]
        disease_info = get_disease_info(predicted)
        matched = sorted(set(sanitized).intersection({s.lower() for s in disease_info.get('symptoms', [])}))

        top_3_with_scores = [
            {
                'disease': label_encoder.inverse_transform([int(i)])[0],
                'confidence': round(float(proba[i]) * 100.0, 2),
            }
            for i in top_idx
        ]

        return {
            'predicted_disease': predicted,
            'confidence': confidence,
            'model_name': model_name,
            'description': disease_info.get('description', ''),
            'matched_symptoms': matched,
            'top_3': top_3,
            'top_3_with_scores': top_3_with_scores,
            'medicines': disease_info.get('medicines', []),
            'precautions': disease_info.get('precautions', []),
            'diet': disease_info.get('diet', []),
            **_build_metadata(disease_info),
        }
    except Exception as e:
        logger.warning("ML prediction failed for symptoms %s: %s — falling back to rule-based", symptoms, e)
        return rule_based_predict(symptoms)
