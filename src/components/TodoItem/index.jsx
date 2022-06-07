import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import {v4} from 'uuid';
import './index.css'
import Tag from '../Tag';


// https://coolors.co/eac8ca-f2d5f8-e6c0e9-bfabcb-8d89a6


export default function TodoItem({taskText, isComplete, todoUid, updateTodoFunction, todoTags, addTagFunction}) {
  const [showMenu, setShowMenu] = useState(false); // Modal menu thing
  const colorClasses = ['color-red', 'color-green', 'color-blue', 'color-yellow']

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const addTag = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      // todoId, todoNewCheck, todoTask
      addTagFunction(todoUid, e.target.value)
      e.target.value = "";
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
  const removeTag = (e) => {
    console.log(e.target.innerText)
    const newTags = todoTags.filter( (tag) => tag !== e);

  };

  /**
   * 
   * @returns {string}
   */
  const randomColorTag = () => {
    return colorClasses[Math.floor(Math.random() * colorClasses.length)] 
  }
  return (
    <div className="todo-list-container">
      <div className="tag-container">
        {
          todoTags.map( tag => (
            <div className={`tag`} key={v4()} >
              <span className="text-tag">{tag}</span>
              <span onClick={(e) => removeTag(e)} className="close-tag">&times;</span>
            </div>
          ))
        }
        <input className="add-tag" onKeyDown={(e) => {addTag(e)}} type="text" placeholder="new tag" />
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
