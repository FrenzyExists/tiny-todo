import React, {useState} from 'react'
import './index.css'
import {v4} from 'uuid';

export default function TodoForm({ addTodoFunction }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        tags: [],
        completed: false,
    });

    /**
     * @param {React.FormEvent<HTMLButtonElement>} e 
     */
    const handleSubmit = (e) => {
      e.preventDefault();


      if ( todo.task.trim() ) {
        let bruh = v4()
        addTodoFunction({
          ...todo, 
          id: bruh
        });

        setTodo({...todo, task: ""})
      }
    }

    /**
     * 
     * @param {React.FormEvent<HTMLButtonElement>} e 
     */
    const handleChange = (e) => {
      setTodo({
        ...todo, task: e.target.value
      });
    }

    
  return (
    <form className="form-container" onSubmit={handleSubmit}>
        <input 
        name="task" 
        type="text" 
        className="todo-input" 
        value={todo.task} 
        placeholder="I'm going to..." 
        onChange={(e) => handleChange(e)} 
        />  
        <button className="todo-btn-form" type="submit">
          <span>+</span>
        </button>
    </form>
  )
}
