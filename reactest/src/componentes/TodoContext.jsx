import React, { useState} from 'react';
import useLocalStorage from './useLocalStorage';


const TodoContext =  React.createContext();

function TodoProvider({children}){

      // el useLocalStorage es un custom hook
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [buscadorValue, setBuscadorValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  

  //filtra los todos que hayan sido completados y retorna un numero
  const TodosCompletados = todos.filter( todo => todo.completado ).length;
  //total de todos
  const TotalTodos = todos.length;
  //se filtra el todo buscado en el input


  const TodoBuscado = todos.filter(
    (todo) => {
      const todoText = (todo.task || '').toLowerCase(); // Asegura que todo.task siempre sea una cadena
      const todobuscado = (buscadorValue || '').toLowerCase(); // Asegura que buscadorValue siempre sea una cadena
      return todoText.includes(todobuscado);
    }
  );

  
//funcion que hace una copia del todo y lo devuelve con el completado true
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.task == text
    );
    newTodos[todoIndex].completado = true;
    saveTodos(newTodos);
  }
  //funcion que quita con el metodo splice la posicion de la tarea
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.task == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({      
      task: text,
      completado: false,
    })
    saveTodos(newTodos);
  }

  
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            todos,
            TodosCompletados,
            TotalTodos,
            buscadorValue,
            addTodo,
            setBuscadorValue,
            TodoBuscado,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };