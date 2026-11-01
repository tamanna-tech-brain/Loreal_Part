from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.routes import health, predict, train

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Inference and explainability microservice for ScrapClock (L'Oréal Sustainability Challenge 2026)"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, tags=["Health"])
app.include_router(predict.router, tags=["Predict"])
app.include_router(train.router, tags=["Train"])

@app.get("/")
def root():
    return {
        "message": "ScrapClock AI Inference Engine is operational",
        "docs": "/docs"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.HOST, port=settings.API_PORT, reload=True)

