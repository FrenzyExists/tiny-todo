import React from 'react';
import { Todo, Sidebar } from './components'
import './index.css'

function App() {
  return (
    <header className="head">
      <Sidebar/>
      <div className="body">
      <Todo />
      </div>
    </header>
  );
}

export default App;
