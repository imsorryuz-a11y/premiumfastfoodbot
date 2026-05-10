from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from core.database import engine, Base
from api.router import router as api_router

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Premium Fast Food App API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Premium Fast Food API is running", "webapp_url": settings.WEBAPP_URL}
