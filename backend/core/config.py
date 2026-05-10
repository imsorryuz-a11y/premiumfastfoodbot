from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    BOT_TOKEN: str = "YOUR_BOT_TOKEN_HERE"
    WEBAPP_URL: str = "https://your-webapp-url.vercel.app"
    DATABASE_URL: str = "sqlite:///./test.db"
    ADMIN_ID: int = 123456789
    
    class Config:
        env_file = ".env"

settings = Settings()
