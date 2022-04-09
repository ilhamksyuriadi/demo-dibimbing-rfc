import React, { useState } from 'react'
import './AddTodo.css';

const AddTodo = ({handleAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoDescription, setTodoDescription] = useState('')

    const handletTitle = (e) => {
        const val = e.target.value;
        setTodoTitle(val)
    }

    const handleDescription = (e) => {
        const val = e.target.value;
        setTodoDescription(val)
    }

    const handleAdd = () => {
        console.log('title',todoTitle)
        console.log('description',todoDescription)
        const newTodo = {
            title: todoTitle,
            description: todoDescription
        }
        handleAddTodo(newTodo)
        setTodoTitle('')
        setTodoDescription('')
    }

    return (
        <div className='add-todo-container'>
            <input value={todoTitle} onChange={e => handletTitle(e)} className='add-todo-title' type="text" placeholder='Todo Title'></input>
            <input value={todoDescription} onChange={e =>handleDescription(e)} className='add-todo-description' type="text" placeholder='Todo Description'></input>
            <button onClick={handleAdd} className='add-todo-button'>Add</button>
        </div>
    )
}

export default AddTodo