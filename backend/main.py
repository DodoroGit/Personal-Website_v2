from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 設定，允許前端 React 呼叫 API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 上線後建議只允許你的 domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
def read_root():
    return {"message": "Hello from FastAPI 🚀"}
