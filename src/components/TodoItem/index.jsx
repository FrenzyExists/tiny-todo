import React, { useState } from 'react'
import {v4} from 'uuid';
import './index.css'
import Tag from '../Tag';


// https://coolors.co/eac8ca-f2d5f8-e6c0e9-bfabcb-8d89a6

/**
 * 
 * @param {Array} todoTags 
 * @returns 
 */
export default function TodoItem({taskText, isComplete, todoUid, updateTodoFunction, todoTags, addTagFunction, removeTagFunction, removeTodoFunction}) {
  const [showMenu, setShowMenu] = useState(false); // Modal menu thing
  const colorClasses = ['color-red', 'color-green', 'color-blue', 'color-yellow']
  const [tag, setTag] = useState({
    id: "",
    tagText: "",
    color: "",
  });

/**
   * 
   * @returns {string}
   */
 const randomColorTag = () => {
  return colorClasses[Math.floor(Math.random() * colorClasses.length)] 
}


  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const handleTagChange = e => {
    // console.log(e.target.value.trim())
    if (e.target.value.length >= 0) {
      setTag({...tag, tagText: e.target.value, id: v4(), color: randomColorTag()});
    }
  }

  const removeTodo = () => {
    // console.log(typeof removeTodoFunction)
    // console.log(typeof addTagFunction)
    // console.log(todoUid)
    removeTodoFunction(todoUid)
  }

  const addTag = (e) => {
    e.preventDefault();

    if ( tag.tagText.trim().length > 0 ) {
      if (!todoTags.some(t => t.tagText === tag.tagText)) {
        addTagFunction(todoUid, tag);
        setTag({...tag, tagText: ""})
      }
    }    
  }

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const onCheckingTodo = (e) =>  {
    updateTodoFunction(todoUid, e.target.checked, taskText)
  }

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const removeTag = (id) => {
    // const removeTag = (todoId, tagId)
    removeTagFunction(todoUid, id);
  };


  return (
    <div className="todo-list-container">
      <div className="tag-container">
        {
          todoTags.map( tag => (

            <Tag color={tag.color}  id={tag.id} key={tag.id} text={tag.tagText} removeTagFunction={removeTag} />
          ))
        }
        <form onSubmit={addTag}>
          <input className="add-tag" value={tag.tagText} onChange={handleTagChange} type="text" placeholder="new tag" />
        </form>
      </div>
      <div className="text-todo">
        <input className="checkbox-todo" id={todoUid} type="checkbox" checked={isComplete} onChange={(e) => onCheckingTodo(e)} />
        <label htmlFor={todoUid}>
          <span className="text-todo"><p>{taskText}</p></span>
        </label>
      </div>
      <div className="todo-btn">
        <button className="todo-item-btn edit">✎</button>
        <button className="todo-item-btn delete" onClick={removeTodo}>⊗</button>
      </div>
    </div>
  );
}
