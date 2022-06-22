import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { CookiesProvider } from 'react-cookie';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
<CookiesProvider>
<App />
</CookiesProvider>
);

// During an update, there is no need to pass the container again
root.render(<CookiesProvider>
    <App />
    </CookiesProvider>);