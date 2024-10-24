import React from 'react'
import './com.css'

const TodoList = ({children}) => {
  return (
    <ul className='lista'>
        {children}   
    </ul>
  )
}

export {TodoList}