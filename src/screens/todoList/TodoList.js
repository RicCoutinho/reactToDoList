import React from 'react'
import './todoList.css'
import { TodoCard } from './components/TodoCard'


export const TodoList = () => {
  return (
    <>
      <div className="listContainer">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </>
  )
}
