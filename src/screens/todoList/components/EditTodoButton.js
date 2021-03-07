import React from 'react'
import '../todoList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


export const EditTodoButton = () => {
  return (
    <>
      <button className="editButton">
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </>
  )
}
