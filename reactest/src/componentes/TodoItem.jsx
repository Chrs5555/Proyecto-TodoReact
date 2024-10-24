import React, { useState } from 'react'
import './com.css'

const TodoItem = (props) => {

  return (
    <div className='contenedor-item'>
        <li className='item-todo'>
          <img className='icon' src={props.completado ? './check.png' : './checkB.png' } alt="check" onClick={props.onComplete} />
          <p className={`task ${props.completado && "task-complete"}`}>{props.text}</p>
          <img className='icon' src="./cerrar.jpg" alt="cerrar" onClick={props.onDelete}/>
        </li>
    </div>
  )
}

export {TodoItem}