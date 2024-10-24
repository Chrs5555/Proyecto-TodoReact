import React from 'react'
import './com.css'


function CrearButton({setOpenModal}){
  return(
    <button className='btn-agregar' onClick={
      () => {
        setOpenModal(state => !state);
      }
    }>agregar</button>
  )
}

export {CrearButton}