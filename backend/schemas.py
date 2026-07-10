from pydantic import BaseModel, Field, field_validator
from typing import List, Optional


class PredictionRequest(BaseModel):
    symptoms: List[str] = Field(..., min_length=1, max_length=20)

    @field_validator('symptoms', mode='before')
    @classmethod
    def strip_symptoms(cls, values):
        result = []
        for v in values:
            text = str(v).strip()
            if not text:
                raise ValueError('Symptoms must be non-empty strings')
            result.append(text)
        return result


class MedicineItem(BaseModel):
    name: str
    dosage: str = 'Dosage as directed by physician'
    type: str = 'General'


class DiseaseScore(BaseModel):
    disease: str
    confidence: float


class PredictionResponse(BaseModel):
    model_config = {"protected_namespaces": ()}
    predicted_disease: Optional[str] = None
    confidence: float = 0.0
    model_name: Optional[str] = None
    description: Optional[str] = None
    matched_symptoms: List[str] = []
    top_3: List[str] = []
    top_3_with_scores: List[DiseaseScore] = []
    medicines: List[MedicineItem] = []
    precautions: List[str] = []
    diet: List[str] = []
    emergency_level: Optional[str] = None
    category: Optional[str] = None
    specialist: Optional[str] = None
    icd_code: Optional[str] = None
    risk_factors: List[str] = []


class DiseaseSummary(BaseModel):
    name: str
    category: Optional[str] = None
    emergency_level: Optional[str] = None
    icd_code: Optional[str] = None
    specialist: Optional[str] = None
    symptoms: List[str] = []


class CategorySummary(BaseModel):
    count: int
    diseases: List[str]


class HealthResponse(BaseModel):
    status: str
    model: str
    version: str
    total_diseases: int = 0
    total_symptoms: int = 0
