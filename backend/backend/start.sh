#!/bin/bash
# FastAPI serverni orqa fonga ishga tushirish
uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000} &
# Aiogram botni ishga tushirish
python bot.py
