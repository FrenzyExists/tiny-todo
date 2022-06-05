import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);

// During an update, there is no need to pass the container again
root.render(<App />);