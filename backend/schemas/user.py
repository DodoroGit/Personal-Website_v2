from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    nickname: str
    email: EmailStr
    password: str
    verify_code: str

class UserOut(BaseModel):
    id: int
    nickname: str
    email: EmailStr
    is_admin: bool

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
