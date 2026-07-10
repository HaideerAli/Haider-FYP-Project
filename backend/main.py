from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from backend import predictor
from backend.schemas import (
    PredictionRequest, PredictionResponse, HealthResponse,
    DiseaseSummary, CategorySummary
)
from typing import Dict, List


@asynccontextmanager
async def lifespan(app: FastAPI):
    predictor.load_artifacts()
    yield


app = FastAPI(
    title="MediRec API",
    version="2.0.0",
    description="Advanced Medicine Recommendation System — AI-powered symptom analysis with 50+ diseases",
    lifespan=lifespan,
)
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


@app.get('/api/health', response_model=HealthResponse, tags=['system'])
async def api_health():
    symptoms = predictor.get_symptoms()
    diseases = predictor.get_all_diseases()
    return {
        "status": "ok",
        "model": predictor.model_name,
        "version": "2.0.0",
        "total_diseases": len(diseases),
        "total_symptoms": len(symptoms),
    }


@app.get('/api/symptoms', response_model=List[str], tags=['symptoms'])
async def api_symptoms():
    return predictor.get_symptoms()


@app.get('/api/diseases', response_model=List[DiseaseSummary], tags=['diseases'])
async def api_diseases():
    return predictor.get_all_diseases()


@app.get('/api/categories', tags=['diseases'])
async def api_categories():
    return predictor.get_categories()


@app.get('/api/disease/{name}', tags=['diseases'])
async def api_disease(name: str):
    disease = predictor.get_disease_info(name)
    if not disease:
        raise HTTPException(status_code=404, detail='Disease not found')
    return {'name': name, **disease}


@app.post('/api/predict', response_model=PredictionResponse, tags=['predictions'])
async def api_predict(req: PredictionRequest):
    result = predictor.predict(req.symptoms)
    return result


@app.get('/', tags=['system'])
async def root():
    """Simple root endpoint so the service returns a friendly 200 at /
    and provides a pointer to the health endpoint."""
    return {"message": "MediRec API", "health_url": "/api/health"}
