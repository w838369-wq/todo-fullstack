import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:8000/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);

  // 页面加载时获取数据
  useEffect(() => {
    fetchTodos();
  }, []);

  // 获取所有 todo
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    } finally {
      setLoading(false);
    }
  };

  // 添加新 todo
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const response = await axios.post(`${API_URL}/todos`, {
        title: inputValue,
        completed: false,
      });
      setTodos([...todos, response.data]);
      setInputValue(''); // 清空输入框
    } catch (error) {
      console.error('Failed to create todo:', error);
    }
  };

  // 切换 todo 完成状态
  const handleToggleTodo = async (todo) => {
    try {
      const response = await axios.put(`${API_URL}/todos/${todo.id}`, {
        ...todo,
        completed: !todo.completed,
      });
      setTodos(todos.map(t => t.id === todo.id ? response.data : t));
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  // 删除 todo
  const handleDeleteTodo = async (todoId) => {
    try {
      await axios.delete(`${API_URL}/todos/${todoId}`);
      setTodos(todos.filter(t => t.id !== todoId));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  if (loading) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container">
      <div className="header">
        <h1>📝 My Todo List</h1>
        <p className="subtitle">Build with React + FastAPI</p>
      </div>

      {/* 输入表单 */}
      <form onSubmit={handleAddTodo} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          className="input"
        />
        <button type="submit" className="btn btn-add">
          Add
        </button>
      </form>

      {/* Todo 列表 */}
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty">No todos yet. Add one to get started!</p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo)}
                className="checkbox"
              />
              <span className={todo.completed ? 'completed' : ''}>
                {todo.title}
              </span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="btn btn-delete"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* 统计信息 */}
      <div className="stats">
        <p>Total: {todos.length}</p>
        <p>Completed: {todos.filter(t => t.completed).length}</p>
      </div>
    </div>
  );
}

export default App;
