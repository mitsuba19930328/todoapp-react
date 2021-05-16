import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Blog from './Blog';
import Todo from './Todo';

ReactDOM.render(
  <React.StrictMode>
    <Todo />
    {/*<Blog />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
