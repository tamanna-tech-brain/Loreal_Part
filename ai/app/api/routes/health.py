from fastapi import APIRouter
from datetime import datetime, timezone

router = APIRouter()

@router.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "ScrapClock AI Microservice",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "modelLoaded": False
    }

