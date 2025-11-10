# 📝 Todo Fullstack Application

A modern, full-stack Todo application built with **React**, **FastAPI**, and **PostgreSQL** (with SQLite for MVP). This project demonstrates end-to-end web development with a clean architecture and best practices.

## 🎯 Features

✅ **Core Functionality**
- Create, Read, Update, Delete (CRUD) todos
- Mark todos as completed
- Real-time UI updates
- Responsive design

✅ **Technology Stack**
- **Frontend**: React 18 + Vite + Axios
- **Backend**: FastAPI + Uvicorn
- **Database**: SQLite (MVP) / PostgreSQL (production-ready)
- **DevOps**: Docker + Docker Compose
- **Version Control**: Git + GitHub

✅ **Best Practices**
- Separated frontend and backend
- RESTful API design
- CORS configuration for cross-origin requests
- Error handling and loading states
- Clean code structure
- Git version control with .gitignore

---

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- Git

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/w838369-wq/todo-fullstack.git
cd todo-fullstack
```

#### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

#### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install
```

### Running the Application

#### Option 1: Run Locally (Recommended for Development)

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # macOS/Linux or venv\Scripts\activate on Windows
python3 main.py
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

You should see:
```
➜  Local:   http://localhost:5173/
```

**Open your browser and visit:** `http://localhost:5173`

---

#### Option 2: Run with Docker

```bash
# Make sure you're in the project root directory
docker-compose up
```

Then visit: `http://localhost:3000`

---

## 📁 Project Structure

```
todo-fullstack/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt      # Python dependencies
│   └── venv/                # Virtual environment (ignored in Git)
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── App.css          # Styles
│   │   └── main.jsx         # Entry point
│   ├── package.json         # Node dependencies
│   ├── vite.config.js       # Vite configuration
│   └── node_modules/        # Node packages (ignored in Git)
│
├── .gitignore               # Git ignore rules
├── docker-compose.yml       # Docker Compose configuration
└── README.md                # This file
```

---

## 🔌 API Endpoints

### Get All Todos
```
GET /api/todos
```
**Response:**
```json
[
  {
    "id": 1,
    "title": "Learn React",
    "completed": false,
    "created_at": "2025-10-23"
  }
]
```

### Create Todo
```
POST /api/todos
```
**Request Body:**
```json
{
  "title": "New Todo",
  "completed": false
}
```

### Update Todo
```
PUT /api/todos/{todo_id}
```
**Request Body:**
```json
{
  "title": "Updated Title",
  "completed": true
}
```

### Delete Todo
```
DELETE /api/todos/{todo_id}
```

---

## 🎨 Screenshots

### Todo List Interface
- Clean, modern UI with gradient background
- Real-time task management
- Checkbox for marking completed tasks
- Delete button for each task
- Statistics showing total and completed tasks

---

## 🛠️ Tech Stack Details

### Backend (FastAPI)
- **Framework**: FastAPI - Modern, fast web framework
- **Server**: Uvicorn - ASGI server
- **Features**:
  - RESTful API design
  - CORS middleware for frontend communication
  - Pydantic for data validation
  - Automatic API documentation (Swagger UI)

### Frontend (React)
- **Framework**: React 18 with Hooks
- **Build Tool**: Vite - Lightning fast build tool
- **HTTP Client**: Axios for API requests
- **Styling**: CSS with modern design
- **State Management**: React Hooks (useState, useEffect)

---

## 📚 Learning Outcomes

By studying this project, you'll learn:
- ✅ Full-stack web development
- ✅ Frontend-backend communication
- ✅ REST API design principles
- ✅ React component architecture
- ✅ Python web frameworks
- ✅ Git version control
- ✅ Docker containerization
- ✅ Project organization and structure

---

## 🚦 Development Roadmap

### Completed ✅
- [x] Basic CRUD operations
- [x] React frontend with Vite
- [x] FastAPI backend
- [x] Docker setup
- [x] Git version control

### Coming Soon 🔄
- [ ] SQLite database integration
- [ ] User authentication (JWT)
- [ ] PostgreSQL migration
- [ ] Unit tests
- [ ] CI/CD pipeline
- [ ] Deployment (Vercel + Render)
- [ ] Categories and tags
- [ ] Data persistence
---

## 👨‍💻 Author

**Wendi Chen**
- GitHub: [@w838369-wq](https://github.com/w838369-wq)

---


---

**Happy coding! 🚀**

Last updated: October 23, 2025
