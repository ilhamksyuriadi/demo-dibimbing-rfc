import React from 'react'
import './TodoCard.css'

const TodoCard = ({todo, handleRemoveTodo}) => {

    const handleRemove = () => {
        handleRemoveTodo(todo.index)
    }

    return (
        <div className='card-container'>
            <div className='content-container'>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
            </div>
            <button onClick={handleRemove} >Delete</button>
        </div>
    )
}

export default TodoCard