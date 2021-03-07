import React from 'react'
import '../todoList.css'
import { EditTodoButton } from './EditTodoButton'
import { DeleteTodoButton } from './DeleteTodoButton'


export const TodoCard = ({ text }) => {
  return (
    <>
      <div className="todoContainerCard">
        <div className="todoCard">{text}</div>
        <EditTodoButton />
        <DeleteTodoButton />
      </div>
    </>
  )
}
