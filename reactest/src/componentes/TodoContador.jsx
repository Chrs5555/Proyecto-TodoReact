import React from 'react'
import './com.css'
import { TodoContext } from './TodoContext'

const TodoContador = () => {

   const {TodosCompletados, TotalTodos } = React.useContext(TodoContext)

  return (
    <h1 className='contador'>has completado {TodosCompletados} de {TotalTodos} TODOS! </h1>
  )
}

export {TodoContador}