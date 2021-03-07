import React from 'react'
// import uuid from 'react-uuid'
import './App.css'
import { ListHeader } from './screens/header'
import { TodoList } from './screens/todoList'

function App() {

  return (
    <div className="app">
      <div className="headerContainer">
        <ListHeader />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
