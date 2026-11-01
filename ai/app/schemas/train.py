from pydantic import BaseModel, Field
from typing import List, Optional

class TrainRequest(BaseModel):
    runIds: Optional[List[str]] = Field(default=None, description="Run IDs to use for training")
    useSecomBenchmark: bool = Field(default=False, description="Whether to include UCI SECOM benchmark data")
    testSplitRatio: float = Field(default=0.2, ge=0.05, le=0.5)

class TrainResponse(BaseModel):
    status: str
    message: str
    trainRunsCount: int
    testRunsCount: int
    metrics: dict

