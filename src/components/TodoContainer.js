import React, { useState } from 'react'
import './TodoContainer.css'
import AddTodo from './AddTodo'
import TodoCard from './TodoCard'

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([])

    const handleAddTodo = (newTodo) => {
        const tempNewTodo = {
            index: todoList.length + 1,
            title: newTodo.title,
            description: newTodo.description
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