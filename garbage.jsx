import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import './index.css'
import { CSSTransition } from "react-transition-group";

// https://coolors.co/eac8ca-f2d5f8-e6c0e9-bfabcb-8d89a6
const color_pallete_roulette = {
    "Queen Pink":"#eac8ca",
    "Pink Lace":"#f2d5f8",
    "Pink Lavender":"#e6c0e9",
    "Lilac":"#bfabcb",
    "Cool Grey":"#8d89a6"
}

const Modal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

const PopUp = props => {
  const handleClick = () => {
    props.toggle();
  };

  
    return (
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    );
}


export default function TodoItem() {
  const [tags, setTags] = useState([]);

  const [show, setShow] = useState(false);
  const [seen, setSeen] = useState(false);

  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const togglePop = () => {
    setSeen({
      seen: !seen
    });
  };

  const removeTag = (e) => {
    const newTags = tags.filter( (tag) => tag !== e);
  };


  return (

    <div className="todo-list-container">
      
      <div className="tag-container">
        <div className="tag color-red">
          <span className="text-tag">Bootstrap</span>
          <span className="close-tag">&times;</span>
        </div>
      </div>
      <div className="text-todo">
        <span className="text-todo">Finish Lab</span>  
      </div>
      <div className="todo-btn">
        <button className="todo-item-btn" onClick={() => setShow(true)}>...</button>
      </div>
      <div className="btn" onClick={togglePop}>
          <button>New User?</button>
      </div>
      {seen ? <PopUp toggle={togglePop} /> : <p>bruh</p>}

      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
    </div>
  )
}
