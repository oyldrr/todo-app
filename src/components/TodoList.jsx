import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div>
            {
                todos && todos.map((todo) => (
                    <Todo todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }
        </div>
    )
}

export default TodoList
