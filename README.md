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

## 🔍 Troubleshooting

### Backend Issues

**Problem**: `python3: command not found`
```bash
# Try using python instead
python main.py
```

**Problem**: `ModuleNotFoundError: No module named 'fastapi'`
```bash
# Ensure you're in the virtual environment and dependencies are installed
source venv/bin/activate
pip install -r requirements.txt
```

### Frontend Issues

**Problem**: `npm: command not found`
```bash
# Install Node.js from https://nodejs.org/
```

**Problem**: `axios` module not found
```bash
cd frontend
npm install axios
```

### API Connection Issues

**Problem**: Frontend can't connect to backend
- Ensure backend is running on `http://localhost:8000`
- Check CORS settings in `backend/main.py`
- Look at browser console (F12) for error messages

---

## 📝 Git Workflow

```bash
# View commit history
git log

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to GitHub
git push origin main

# View remote repository
git remote -v
```

---

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Wendi Chen**
- GitHub: [@w838369-wq](https://github.com/w838369-wq)
- Portfolio: [Your Portfolio]

---

## ✨ Acknowledgments

- React documentation: https://react.dev
- FastAPI documentation: https://fastapi.tiangolo.com
- Vite documentation: https://vitejs.dev
- Inspired by modern web development best practices

---

## 📞 Support

If you have questions or run into issues, please:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Open an issue on GitHub
3. Check existing GitHub issues for solutions

---

**Happy coding! 🚀**

Last updated: October 23, 2025
