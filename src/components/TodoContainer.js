import React, { useState } from 'react'
import './TodoContainer.css'
import AddTodo from './AddTodo'
import TodoCard from './TodoCard'

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([
        {
            index: 0,
            title: 'Learn Javscript',
            description: 'using javascript to code',
            priority: 'High',
            note: 'this is important on of part of frontend',
        },
        {
            index: 1,
            title: 'Learn Frontend',
            description: 'using react for create frontend pages',
            priority: 'Medium',
            note: 'this is important on of part of web development',
        }
    ])

    const handleAddTodo = (newTodo) => {
        const tempNewTodo = {
            index: todoList.length + 1,
            title: newTodo.title,
            description: newTodo.description,
            note: newTodo.note,
            priority: newTodo.priority
        }
        setTodoList([...todoList, tempNewTodo])
    }

    const handleRemoveTodo = (index) => {
        const newTodoList = todoList.filter(todo => todo.index !== index)
        setTodoList(newTodoList)
    }

    return (
        <section>
            <AddTodo handleAddTodo={handleAddTodo} />
            {todoList.map((todo,index) => {
                return <TodoCard  key={index} todo={todo} handleRemoveTodo={handleRemoveTodo} />
            })}
        </section>
    )
}

export default TodoContainer