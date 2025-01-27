import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>  {/* Оберните только здесь */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
