import json
import sys
import time
import warnings
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.append(str(ROOT))

import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.model_selection import GridSearchCV
from xgboost import XGBClassifier

PROCESSED_DIR = ROOT / 'data' / 'processed'
MODELS_DIR = ROOT / 'models'
REPORTS_DIR = ROOT / 'reports'
REPORTS_DIR.mkdir(parents=True, exist_ok=True)
MODELS_DIR.mkdir(parents=True, exist_ok=True)

MODELS = {
    'RandomForest': RandomForestClassifier(n_estimators=200, random_state=42),
    'XGBoost': XGBClassifier(eval_metric='mlogloss', random_state=42),
}

GRID_SEARCH = {
    'RandomForest': {
        'n_estimators': [100, 200],
        'max_depth': [None, 10, 20],
        'min_samples_split': [2, 5],
    },
    'XGBoost': {
        'n_estimators': [100, 200],
        'learning_rate': [0.01, 0.1],
        'max_depth': [3, 6],
    },
}


def load_processed():
    X_train = np.load(PROCESSED_DIR / 'X_train.npy')
    X_test = np.load(PROCESSED_DIR / 'X_test.npy')
    y_train = np.load(PROCESSED_DIR / 'y_train.npy')
    y_test = np.load(PROCESSED_DIR / 'y_test.npy')
    return X_train, X_test, y_train, y_test


def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    return {
        'accuracy': float(accuracy_score(y_test, y_pred)),
        'classification_report': classification_report(y_test, y_pred, output_dict=True),
        'confusion_matrix': confusion_matrix(y_test, y_pred).tolist(),
    }


def run_training() -> None:
    X_train, X_test, y_train, y_test = load_processed()
    results = {}

    best_model = None
    best_accuracy = -1
    best_name = None

    with warnings.catch_warnings():
        warnings.filterwarnings('ignore', category=UserWarning, module='xgboost.*')
        warnings.filterwarnings('ignore', message='.*use_label_encoder.*', category=UserWarning, module='xgboost.*')

        for name, model in MODELS.items():
            start = time.time()
            model.fit(X_train, y_train)
            result = evaluate_model(model, X_test, y_test)
            elapsed = time.time() - start
            result['train_time_seconds'] = elapsed
            results[name] = result
            print(f'{name}: accuracy={result["accuracy"]:.4f}, time={elapsed:.2f}s')

            if result['accuracy'] > best_accuracy:
                best_accuracy = result['accuracy']
                best_model = model
                best_name = name

        for name in ['RandomForest', 'XGBoost']:
            print(f'Running GridSearchCV for {name}...')
            grid = GridSearchCV(MODELS[name], GRID_SEARCH[name], cv=3, n_jobs=-1, verbose=0)
            start = time.time()
            grid.fit(X_train, y_train)
            best = grid.best_estimator_
            result = evaluate_model(best, X_test, y_test)
            results[f'{name}-Grid'] = {
                'accuracy': result['accuracy'],
                'best_params': grid.best_params_,
                'train_time_seconds': time.time() - start,
                'classification_report': result['classification_report'],
                'confusion_matrix': result['confusion_matrix'],
            }
            print(f'{name}-Grid: accuracy={result["accuracy"]:.4f}, params={grid.best_params_}')
            if result['accuracy'] > best_accuracy:
                best_accuracy = result['accuracy']
                best_model = best
                best_name = f'{name}-Grid'

    if best_model is not None:
        joblib.dump(best_model, MODELS_DIR / 'best_model.pkl')
        print(f'Saved best model: {best_name} with accuracy {best_accuracy:.4f}')

    with (REPORTS_DIR / 'model_comparison.json').open('w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)


if __name__ == '__main__':
    run_training()
