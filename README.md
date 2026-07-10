# Medicine Recommendation System — Complete Prototype

This workspace contains a working medicine recommendation system with:
- FastAPI backend in `backend/main.py`
- ML-ready prediction pipeline in `src/preprocessing` and `src/training`
- Model artifacts saved in `models/`
- React + Vite frontend in `frontend/`
- Docker Compose support in `docker-compose.yml`

## What is included

- `backend/main.py`: FastAPI app exposing `/api/symptoms`, `/api/predict`, `/api/disease/{name}`, and `/api/health`
- `backend/predictor.py`: loads saved artifacts and predicts disease/medicines from symptom lists
- `backend/medicine_db.py`: disease-to-medicine, diet, and precaution mappings
- `src/data_generator.py`: sample symptom-disease dataset generation for offline model experimentation
- `src/preprocessing/preprocess.py`: preprocesses data and saves encoders/arrays for optional training experiments
- `src/training/train_models.py`: trains a reference model from sample data for offline exploration
- `frontend/`: React + Tailwind app with Vite build support

## Backend setup (Windows)

1. Create and activate a Python virtual environment

```powershell
cd "f:\working\Haider FYP project"
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Install backend dependencies

```powershell
pip install -r backend/requirements.txt
```

3. Start the backend

```powershell
uvicorn backend.main:app --reload --port 8000
```

The backend loads the trained model from `models/best_model.pkl` and serves predictions through `/api/predict`.

The backend will be available at `http://127.0.0.1:8000`.

## Frontend setup

1. Install frontend dependencies

```powershell
cd frontend
npm install
```

2. Run the development server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

The production preview build is available at `frontend/dist/` after running `npm run build`.

## Training pipeline

The production app does not rely on synthetic training data. Live inference is based on the actual disease and symptom mappings defined in `backend/medicine_db.py`.

If you want to regenerate the sample dataset and retrain a model for offline experimentation only:

```powershell
python src/data_generator.py
python src/preprocessing/preprocess.py
python src/training/train_models.py
```

This saves trained artifacts to the `models/` folder as a reference; the API continues to use the disease knowledge base directly for accurate recommendations.

## Docker deployment

Run the full stack with Docker Compose:

```powershell
docker compose up --build
```

Then open `http://localhost:3000` in your browser. The frontend container is configured to call `http://backend:8000` inside the compose network.

To stop the services:

```powershell
docker compose down
```

## Project verification

- Frontend dependencies installed successfully
- React frontend built successfully with `npm run build`
- ML preprocessing and training pipelines validated
- Docker Compose configuration updated for cross-container networking

## Notes

- The backend loads model artifacts from `models/best_model.pkl`, `models/symptom_encoder.pkl`, and `models/label_encoder.pkl`.
- If your `models/` directory is missing artifacts, regenerate them with the training pipeline above.

## Next steps

- Add end-to-end tests for API + frontend interactions
- Harden the frontend UI with more disease detail and validation
- Add CI/CD automation for automated build and deployment
