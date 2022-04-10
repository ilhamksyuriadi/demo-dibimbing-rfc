import React, { useState } from 'react'
import './AddTodo.css';

const AddTodo = ({ handleAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoDescription, setTodoDescription] = useState('')
    const [todoPriority, setTodoPriority] = useState('High')
    const [todoNote, setTodoNote] = useState('')

    const handletTitle = (e) => {
        const val = e.target.value;
        setTodoTitle(val)
    }

    const handleDescription = (e) => {
        const val = e.target.value;
        setTodoDescription(val)
    }

    const handlePriority = (e) => {
        const val = e.target.value
        setTodoPriority(val)
    }

    const handleNote = (e) => {
        const val = e.target.value;
        setTodoNote(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            title: todoTitle,
            description: todoDescription,
            priority: todoPriority,
            note: todoNote,
        }
        handleAddTodo(newTodo)
        setTodoTitle('')
        setTodoDescription('')
        setTodoPriority('High')
        setTodoNote('')
    }

    return (
        <div className='add-todo-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input value={todoTitle} onChange={handletTitle} type="text" placeholder='e.g. learn forntend' />
                </label>
                <label>
                    Description:
                    <input value={todoDescription} onChange={handleDescription} type="text" placeholder='e.g. using react' />
                </label>
                <label>
                    Priority:
                    <select value={todoPriority} onChange={handlePriority}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </label>
                <label>
                    Notes:
                    <textarea value={todoNote} onChange={handleNote} placeholder="e.g. learn basic react" />
                </label>
                <button type="submit" className='add-todo-button'>Add</button>
            </form>
        </div>
    )
}

export default AddTodo