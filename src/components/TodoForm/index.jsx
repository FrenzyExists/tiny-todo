import React, {useState} from 'react'
import './index.css'
import {v5} from 'uuid';

// Weird magic thing to make tags
const Tag = ( () => {
    var nextID = 0;
    return (name, color) => {
      this.id = nextID++;   
      this.name = name
      this.color = color
    };

  })( 
    <div>
        
    </div>
  );


export default function TodoForm({ addTodoFunction }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        tags: Tag,
        completed: "",
    });

    /**
     * 
     * @param {React.FormEvent<HTMLButtonElement>} e 
     */
    const handleSubmit = (e) => {
      e.preventDefault();
      if ( todo.task.trim() ) {
        addTodoFunction({
          ...todo, id: v5()
        });
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
    <form className="form-container">
        <input name="task" type="text" className="todo-input" value={todo.task} placeholder="I'm going to..." onChange={(e) => handleChange(e)} />  
        <button className="todo-btn-form" onSubmit={handleSubmit}><span>+</span> </button>
    </form>
  )
}
