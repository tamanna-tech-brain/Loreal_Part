from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "ScrapClock" in data["service"]

def test_predict_endpoint_stub():
    payload = {
        "cycleNo": 1,
        "currentSensors": {
            "barrelTemp": 220.0,
            "injPressure": 100.0,
            "mouldTemp": 45.0,
            "cycleTime": 24.5,
            "resinMoisture": 0.02,
            "partWeight": 25.1
        }
    }
    response = client.post("/predict", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "prob" in data
    assert len(data["shapTop3"]) == 3

