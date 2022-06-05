import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import './index.css'


// https://coolors.co/eac8ca-f2d5f8-e6c0e9-bfabcb-8d89a6
const color_pallete_roulette = {
    "Queen Pink":"#eac8ca",
    "Pink Lace":"#f2d5f8",
    "Pink Lavender":"#e6c0e9",
    "Lilac":"#bfabcb",
    "Cool Grey":"#8d89a6"
}


export default function TodoItem({taskText, isComplete, todoUid, updateTodoFunction}) {
  const [tags, setTags] = useState([]);
  const [showMenu, setShowMenu] = useState(false); // Modal menu thing
  const colorClasses = ['color-red', 'color-green', 'color-blue', 'color-yellow']

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };

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
  const removeTag = (e) => {
    const newTags = tags.filter( (tag) => tag !== e);
  };

  const randomColorTag = () => {
    return colorClasses[Math.floor(Math.random() * colorClasses.length)] 
  }

  return (
    <div className="todo-list-container">
      <div className="tag-container">
        {
          tags.map( tag => (
            <div className={`${randomColorTag} tag`}>
              <span className="text-tag">{tag}</span>
              <span onClick={console.log("Close tag")} className="close-tag">&times;</span>
            </div>
          ))
        }
        <input className="add-tag" onChange={(e) => {addTag(e)}} type="text" placeholder="new tag" />
      </div>
      <div className="text-todo">
        <input className="checkbox-todo" id={todoUid} type="checkbox" checked={isComplete} onChange={(e) => onCheckingTodo(e)} />
        <label htmlFor={todoUid}>
          <span className="text-todo">{taskText}</span>
        </label>
      </div>
      <div className="todo-btn">
        <button className="todo-item-btn">...</button>
      </div>
    </div>
  );
}
