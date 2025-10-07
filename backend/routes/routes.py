from fastapi import APIRouter, Depends, HTTPException, Body
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import List
from db.models import User
from db.database import get_db
from schemas.user import UserCreate, UserOut, Token
from utils.auth import (
    get_password_hash, verify_password, create_access_token,
    get_current_user, get_current_admin
)

router = APIRouter()

# =============================
# 註冊
# =============================
@router.post("/register", response_model=UserOut)
def register(user: UserCreate, db: Session = Depends(get_db)):
    if len(user.password.encode("utf-8")) > 72:
        raise HTTPException(status_code=400, detail="密碼長度過長，請小於72字元")

    if user.verify_code != "1234":
        raise HTTPException(status_code=400, detail="驗證碼錯誤")

    if db.query(User).filter(User.email == user.email).first():
        raise HTTPException(status_code=400, detail="Email 已被註冊")

    hashed_password = get_password_hash(user.password)
    new_user = User(
        nickname=user.nickname,
        email=user.email,
        hashed_password=hashed_password,
        is_admin=False
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# =============================
# 登入
# =============================
@router.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="帳號或密碼錯誤")

    access_token = create_access_token(data={"sub": user.email, "role": "admin" if user.is_admin else "user"})
    return {"access_token": access_token, "token_type": "bearer"}

# =============================
# 取得登入者資訊
# =============================
@router.get("/users/me", response_model=UserOut)
def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user

# =============================
# 管理員：列出所有使用者
# =============================
@router.get("/admin/users", response_model=List[UserOut])
def get_all_users(db: Session = Depends(get_db), admin: User = Depends(get_current_admin)):
    return db.query(User).all()
