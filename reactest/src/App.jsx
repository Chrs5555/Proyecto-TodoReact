// importaciones 
import React, { useContext } from 'react'
import './App.css'
import { TodoItem } from './componentes/TodoItem'
import { TodoContador } from './componentes/TodoContador'
import { TodoBuscador } from './componentes/TodoBuscador'
import { TodoList } from './componentes/TodoList'
import { CrearButton } from './componentes/CrearButton'
import TodoMensaje from './componentes/TodoMensaje'
import TodosError from './componentes/TodosError'
import TodosEmpty from './componentes/TodosEmpty'
import { TodoContext, TodoProvider } from './componentes/TodoContext'
import { Modal } from './componentes/Modal'
import { TodoForm } from './componentes/FormModal'


function App() {

  const { todos, loading, error, TodoBuscado, completeTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext);



  
  return (
    <>
            <div className='contenedor'>

                { todos.length > 0 && (
                  <>
                    <TodoContador/>
                    <TodoBuscador/>
                  </>
                )}

                {todos.length === 0 ? (
                    <TodoMensaje/>
                
                ) : (
                  
                      <TodoList>

                      {error && <TodosError/>}
                      {/* {!loading && TodoBuscado.length === 0 && <TodosEmpty/>} */}

                      {TodoBuscado.map(todo=>(
                        <TodoItem 
                          key={todo.task} 
                          text={todo.task} 
                          completado={todo.completado} 
                          onComplete={() => completeTodo(todo.task)}
                          onDelete={() => deleteTodo(todo.task)}/>
                      ))}
                      </TodoList> 
                    
               

            ) }

      <CrearButton setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal >
          <TodoForm></TodoForm>
        </Modal>
      )}

      </div>
    </>
  )
}

export default  App;
