from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional

class SensorSnapshot(BaseModel):
    barrelTemp: float
    injPressure: float
    mouldTemp: float
    cycleTime: float
    resinMoisture: float
    partWeight: float

class PredictRequest(BaseModel):
    cycleNo: int
    currentSensors: SensorSnapshot
    features: Optional[Dict[str, float]] = None
    window: Optional[List[Dict[str, float]]] = None

class ShapFeature(BaseModel):
    feature: str
    shapValue: float
    direction: str = Field(description="'high' or 'low' relative to normal baseline")

class PredictResponse(BaseModel):
    prob: float = Field(ge=0.0, le=1.0, description="P(defect in next 20 cycles)")
    shapTop3: List[ShapFeature]
    modelTimestamp: Optional[str] = None

