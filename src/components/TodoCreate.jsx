import React, { useState } from 'react'
import '../css/todo.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo("");
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput()
    }

    return (
        <div>
            <h1>TO DO APP</h1>
            <input type="text" placeholder='Enter a to do'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={createTodo}>Create Todo</button>
        </div>
    )
}

export default TodoCreate
