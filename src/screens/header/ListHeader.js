import React, { useState } from 'react'
import './Header.css'
import { Searchbar } from './components/SearchBar'
import { ButtonAdd } from './components/ButtonAdd'


export const ListHeader = () => {
  return (
    <>
      <div className="titleContainer">To do List</div>
      <div className="inputContainer">
        <Searchbar />
        <ButtonAdd />
      </div>
    </>
  )
}
