from pydantic import BaseModel
from typing import List, Optional

class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    image: str
    calories: Optional[int] = None
    spicyLevel: int = 0
    category: str

class ProductCreate(ProductBase):
    pass

class ProductResponse(ProductBase):
    id: int
    class Config:
        from_attributes = True

class OrderItemSchema(BaseModel):
    product_id: int
    quantity: int
    price: float

class OrderCreate(BaseModel):
    user_id: int
    items: List[OrderItemSchema]
    total_price: float
    delivery_fee: float
    address: str
    phone: str
    payment_type: str

class OrderResponse(OrderCreate):
    id: int
    status: str
    class Config:
        from_attributes = True
