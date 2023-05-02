import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter basename={process.env.PUBLIC_URL}> //123
  <App />
  // {/* </BrowserRouter> */}
);
