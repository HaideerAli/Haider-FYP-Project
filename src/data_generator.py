import csv
import random
import sys
from pathlib import Path

random.seed(42)

ROOT = Path(__file__).resolve().parents[1]
sys.path.append(str(ROOT))

from backend.medicine_db import DISEASE_DB

OUTPUT_PATH = ROOT / 'data' / 'raw' / 'sample_symptom_disease.csv'

SYMPTOM_FIELD_COUNT = 8
ROWS_PER_DISEASE = 40

if not OUTPUT_PATH.parent.exists():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

symptoms = sorted({s for info in DISEASE_DB.values() for s in info.get('symptoms', [])})

fields = [f'symptom_{i+1}' for i in range(SYMPTOM_FIELD_COUNT)] + ['Disease']

with OUTPUT_PATH.open('w', newline='', encoding='utf-8') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fields)
    writer.writeheader()

    for disease, info in DISEASE_DB.items():
        disease_symptoms = info.get('symptoms', [])
        for _ in range(ROWS_PER_DISEASE):
            row = {field: '' for field in fields}
            chosen = set(random.sample(disease_symptoms, min(len(disease_symptoms), 4)))
            other = set(random.sample([s for s in symptoms if s not in chosen], 2))
            selected = list(chosen | other)
            random.shuffle(selected)
            for idx, symptom in enumerate(selected[:SYMPTOM_FIELD_COUNT]):
                row[f'symptom_{idx+1}'] = symptom
            row['Disease'] = disease
            writer.writerow(row)

print(f'Sample dataset created at {OUTPUT_PATH}')
