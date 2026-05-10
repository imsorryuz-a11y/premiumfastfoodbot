from sqlalchemy import Column, Integer, String, Float, JSON, DateTime
from core.database import Base
import datetime

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, index=True)
    items = Column(JSON) # [{'product_id': 1, 'quantity': 2, 'price': 35000}]
    total_price = Column(Float)
    delivery_fee = Column(Float)
    status = Column(String, default="qabul_qilindi") # qabul_qilindi, tayyorlanmoqda, kuryerda, yetkazildi
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    address = Column(String)
    phone = Column(String)
    payment_type = Column(String)
