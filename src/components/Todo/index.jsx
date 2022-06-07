import React, {useState, useEffect} from 'react'
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';
import './index.css';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  /**
   * 
   * @param {String} todoId 
   * @param {Boolean} todoNewCheck 
   * @param {String} todoTask 
   */
  const updateTodo = (todoId, todoNewCheck, todoTask) => {
    const newTodos = todos.map(t => {
      if (todoId == t.id) {
        return {... t, completed: todoNewCheck, task: todoTask }
      }
      return t;
    });
    setTodos(newTodos);
  }

  const addTag = (todoId, tag) => {
    const newTodos = todos.map(t => {
      if (todoId == t.id) {
        return {... t, tags: [...t.tags, tag] }
      }
      return t;
    });
    setTodos(newTodos);
  }

  return (
    <div className="todo-main-container">
      <TodoForm addTodoFunction={addTodo} />
      {
      todos.map(e => (
        <TodoItem key={e.id} todoUid={e.id} taskText={e.task} isComplete={e.completed} updateTodoFunction={updateTodo} todoTags={e.tags} addTagFunction={addTag} />  
      ))
        }
    </div>
  )
}
