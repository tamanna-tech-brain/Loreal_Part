from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "ScrapClock AI Microservice"
    VERSION: str = "1.0.0"
    API_PORT: int = 8000
    HOST: str = "0.0.0.0"
    MODEL_DIR: str = "saved_models"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
