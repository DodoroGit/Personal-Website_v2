from fastapi import FastAPI
from db.models import Base
from db.database import engine
from middleware.cors import setup_cors
from routes import routes

# 初始化資料表
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Personal Website Backend")

# 設定 CORS
setup_cors(app)

# 載入路由
app.include_router(routes.router, tags=["User & Auth"])
