import React, {useState} from 'react'
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';
import './index.css';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  /**
   * 
   * @param {string} todo 
   * @returns 
   */
  const addTodo = (todo) => {
    if (!todo.trim()) {
      return;
    }
    setTodos([...todo, todos])
  }

  const updateTodo = (todoId, newTodo) => {
  }

  return (
    <div className="todo-main-container">
      <TodoForm addTodoFunction={addTodo} />
      {todos.map(e => (
        <TodoItem  />  
      ))
        }
    </div>
  )
}
