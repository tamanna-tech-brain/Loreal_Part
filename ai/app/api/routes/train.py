from fastapi import APIRouter
from app.schemas.train import TrainRequest, TrainResponse

router = APIRouter()

@router.post("/train", response_model=TrainResponse)
def train(request: TrainRequest):
    # Phase 1 stub returning training status
    return TrainResponse(
        status="completed",
        message="Phase 1 stub training pipeline executed successfully",
        trainRunsCount=10,
        testRunsCount=3,
        metrics={
            "precision": 0.88,
            "recall": 0.84,
            "f1": 0.86,
            "roc_auc": 0.92
        }
    )

