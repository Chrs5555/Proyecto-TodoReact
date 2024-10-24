import React, { useContext, useState } from "react";
import './com.css';
import { TodoContext } from "./TodoContext";

function TodoForm(){

    const {addTodo, setOpenModal} = useContext(TodoContext);

    const [newTodo, setNewTodo] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodo);
    };

    const onCancel = (e) => {
        setOpenModal(false);   
    };

    const onChange = (event) => {
        setNewTodo(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label > Escribe tu nuevo Todo</label>
            <textarea onChange={onChange} value={newTodo} placeholder="Ejemplo: Limpiar arena de gato"></textarea>
            <div className="botones-form">
                <button type="button" onClick={onCancel} className="btn-form cancelar">Cancelar</button>
                <button type="submit" className="btn-form agregar">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };