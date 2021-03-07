import React from 'react'
import '../todoList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export const DeleteTodoButton = () => {
  return (
    <>
      <button className="deleteButton">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  )
}
