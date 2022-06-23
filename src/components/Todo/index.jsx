import React, { useState } from 'react'
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';
import { withCookies, useCookies } from 'react-cookie';
import './index.css';


export default withCookies(function Todo() {
  const [cookies, setCookies] = useCookies([("todoListCookie", [], { path: "/", secure: 'true' })]);
  const [todos, setTodos] = useState(cookies.todoListCookie || []);




  const addTodo = (todo) => {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
    setCookies("todoListCookie", [todo, ...todos], { path: "/", secure: 'true' });
  }

  const removeTodo = (todoId) => {
    var remove_plz = todos.filter(t => t.id !== todoId)
    setTodos(remove_plz);
    setCookies("todoListCookie", remove_plz, { path: "/", secure: 'true' });
  }

  /**
   * 
   * @param {String} todoId 
   * @param {Boolean} todoNewCheck 
   * @param {String} todoTask 
   */
  const updateTodo = (todoId, todoNewCheck, todoTask) => {
    const newTodos = todos.map(t => {
      if (todoId === t.id) {
        return { ...t, completed: todoNewCheck, task: todoTask }
      }
      return t;
    });
    setTodos(newTodos);
    setCookies("todoListCookie", newTodos, { path: "/", secure: 'true' });
  }

  const addTag = (todoId, tag) => {
    const newTodos = todos.map(t => {
      if (todoId === t.id) {
        return { ...t, tags: [...t.tags, tag] }
      }
      return t;
    });
    setTodos(newTodos);
    setCookies("todoListCookie", newTodos, { path: "/", secure: 'true' });
  }

  const removeTag = (todoId, tagId) => {
    const newTodos = todos.map(t => {
      if (todoId === t.id) {
        return { ...t, tags: t.tags.filter(j => j.id !== tagId) }
      }
      return t
    })
    setTodos(newTodos);
    setCookies("todoListCookie", newTodos, { path: "/", secure: 'true' });
  }

  return (
    <div className="todo-main-container">
      <TodoForm addTodoFunction={addTodo} />
      {
        todos.map(e => (
          <TodoItem key={e.id} todoUid={e.id} taskText={e.task} isComplete={e.completed} updateTodoFunction={updateTodo} todoTags={e.tags} addTagFunction={addTag} removeTagFunction={removeTag} removeTodoFunction={removeTodo} />
        ))
      }
    </div>
  )
});
