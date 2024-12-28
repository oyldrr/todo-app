import React, { useState } from 'react'

/* React Icons */
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div className='todo-container'>
            <div className='todo-input'>
                {
                    editable ? <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : <input disabled type="text" value={newTodo} />
                }

            </div>
            <div className='buttons-container'>
                <button onClick={removeTodo}><IoIosRemoveCircle /></button>
                {
                    editable ? <button onClick={updateTodo}><FaCheck /></button> : <button onClick={() => setEditable(true)}><FaEdit /></button>
                }
            </div>
        </div>
    )
}

export default Todo
