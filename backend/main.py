from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime

# ============ 配置 ============
app = FastAPI()

# 允许前端跨域请求
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============ 数据模型 ============
class Todo(BaseModel):
    id: int = None
    title: str
    completed: bool = False
    created_at: str = None

# ============ 模拟数据库 ============
todos_db: List[Todo] = [
    Todo(id=1, title="学习 React", completed=False, created_at="2025-10-23"),
    Todo(id=2, title="学习 FastAPI", completed=True, created_at="2025-10-22"),
]
next_id = 3

# ============ API 端点 ============

@app.get("/")
def root():
    """健康检查"""
    return {"message": "Todo API is running!"}

@app.get("/api/todos")
def get_todos():
    """获取所有 todo"""
    return todos_db

@app.post("/api/todos")
def create_todo(todo: Todo):
    """创建新 todo"""
    global next_id
    todo.id = next_id
    todo.created_at = datetime.now().strftime("%Y-%m-%d")
    todos_db.append(todo)
    next_id += 1
    return todo

@app.put("/api/todos/{todo_id}")
def update_todo(todo_id: int, todo: Todo):
    """更新 todo"""
    for i, t in enumerate(todos_db):
        if t.id == todo_id:
            todos_db[i] = Todo(
                id=todo_id,
                title=todo.title,
                completed=todo.completed,
                created_at=t.created_at
            )
            return todos_db[i]
    return {"error": "Todo not found"}

@app.delete("/api/todos/{todo_id}")
def delete_todo(todo_id: int):
    """删除 todo"""
    global todos_db
    todos_db = [t for t in todos_db if t.id != todo_id]
    return {"message": "Deleted"}

# ============ 启动 ============
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)