import React, { useState } from 'react'
import './com.css'
import { TodoContext } from './TodoContext'

const TodoBuscador = () => {
   
  // const [buscadorValue, setBuscadorValue] = useState('')
  const { buscadorValue, setBuscadorValue} = React.useContext(TodoContext);

  return (
    <input className='input' placeholder='Buscar tarea' value={buscadorValue} onChange={(e) =>{setBuscadorValue(e.target.value)}}/>
    
  )
}

export { TodoBuscador }