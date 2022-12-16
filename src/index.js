import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import { ApiContext, ApiContextProvider } from './utils/ApiContext' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </React.StrictMode>
);

