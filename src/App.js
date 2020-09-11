import React from 'react';
import TodoApp from './components/TodoApp/TodoApp.js'
// import logo from './logo.svg';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoApp />
      {/* <ul>
        {props.todos.map((todo, index) => {
          return <li key={index}> {props.todos[index]} </li>
        })}
      </ul> */}
    </div>
  );
}

export default App;
