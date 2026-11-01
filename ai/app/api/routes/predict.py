from fastapi import APIRouter
from app.schemas.predict import PredictRequest, PredictResponse, ShapFeature
from datetime import datetime, timezone

router = APIRouter()

@router.post("/predict", response_model=PredictResponse)
def predict(request: PredictRequest):
    # Phase 1 stub returning schema-compliant prediction
    return PredictResponse(
        prob=0.03,
        shapTop3=[
            ShapFeature(feature="resinMoisture", shapValue=0.45, direction="high"),
            ShapFeature(feature="mouldTemp", shapValue=0.32, direction="low"),
            ShapFeature(feature="injPressure", shapValue=0.18, direction="low")
        ],
        modelTimestamp=datetime.now(timezone.utc).isoformat()
    )

