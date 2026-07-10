import json
import sys
from pathlib import Path
from typing import Tuple

ROOT = Path(__file__).resolve().parents[2]
sys.path.append(str(ROOT))

import joblib
import numpy as np
import pandas as pd
from imblearn.over_sampling import SMOTE
from sklearn.preprocessing import LabelEncoder, MultiLabelBinarizer
from sklearn.model_selection import train_test_split

RAW_DATA_PATH = ROOT / 'data' / 'raw' / 'sample_symptom_disease.csv'
PROCESSED_DIR = ROOT / 'data' / 'processed'
MODELS_DIR = ROOT / 'models'

PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
MODELS_DIR.mkdir(parents=True, exist_ok=True)


def load_raw_data(path: Path = RAW_DATA_PATH) -> pd.DataFrame:
    if not path.exists():
        raise FileNotFoundError(f'Raw data not found at {path}. Run src/data_generator.py first.')
    df = pd.read_csv(path)
    return df


def preprocess_data(df: pd.DataFrame) -> Tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, MultiLabelBinarizer, LabelEncoder]:
    symptom_columns = [c for c in df.columns if c.startswith('symptom_')]
    df = df.copy()
    df[symptom_columns] = df[symptom_columns].fillna('').astype(str)
    df['symptom_list'] = df[symptom_columns].apply(lambda row: [s.strip() for s in row if isinstance(s, str) and s.strip()], axis=1)

    # Split raw rows BEFORE encoding to prevent data leakage from MLB and SMOTE
    df_train, df_test = train_test_split(
        df, test_size=0.2, stratify=df['Disease'], random_state=42
    )

    # Fit encoders on training data only
    label_encoder = LabelEncoder()
    y_train = label_encoder.fit_transform(df_train['Disease'])
    y_test = label_encoder.transform(df_test['Disease'])

    mlb = MultiLabelBinarizer()
    X_train = mlb.fit_transform(df_train['symptom_list'])
    X_test = mlb.transform(df_test['symptom_list'])

    # SMOTE only on training data — keeps test set clean
    smote = SMOTE(random_state=42)
    X_train_res, y_train_res = smote.fit_resample(X_train, y_train)

    np.save(PROCESSED_DIR / 'X_train.npy', X_train_res)
    np.save(PROCESSED_DIR / 'X_test.npy', X_test)
    np.save(PROCESSED_DIR / 'y_train.npy', y_train_res)
    np.save(PROCESSED_DIR / 'y_test.npy', y_test)

    joblib.dump(mlb, MODELS_DIR / 'symptom_encoder.pkl')
    joblib.dump(label_encoder, MODELS_DIR / 'label_encoder.pkl')
    with (MODELS_DIR / 'symptom_list.json').open('w', encoding='utf-8') as f:
        json.dump(list(mlb.classes_), f, indent=2)

    return X_train_res, X_test, y_train_res, y_test, mlb, label_encoder


def run_preprocess() -> None:
    df = load_raw_data()
    X_train, X_test, y_train, y_test, mlb, label_encoder = preprocess_data(df)

    print('Preprocessing complete:')
    print(f'  Raw rows: {len(df)}')
    print(f'  Symptom features: {len(mlb.classes_)}')
    print(f'  Train shape (after SMOTE): {X_train.shape}')
    print(f'  Test shape: {X_test.shape}')


if __name__ == '__main__':
    run_preprocess()
