import React, { useState } from 'react'
import './TodoContainer.css'
import AddTodo from './AddTodo'
import TodoCard from './TodoCard'

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([
        {
            index: 0,
            title: 'Learn Reactjs',
            description: 'how to code in reactjs',
            priority: 'Medium',
            note: 'no note.'
        }
    ])

    const handleAddTodo = (newTodo) => {
        const tempNewTodo = {
            index: todoList.length,
            title: newTodo.title,
            description: newTodo.description,
            priority: newTodo.priority,
            note: newTodo.note
        }
        setTodoList([...todoList, tempNewTodo])
    }

    const handleEditTodo = (editedTodo) => {
        console.log('edit todo', editedTodo)
        const newTodoList = todoList.splice(editedTodo.index, 1, editedTodo)
        console.log('newTodoList',newTodoList)
        console.log('todoList',todoList)
        setTodoList([...newTodoList])
    }

    const handleRemoveTodo = (index) => {
        const newTodoList = todoList.filter(todo => todo.index !== index)
        setTodoList(newTodoList)
    }

    return (
        <section>
            <AddTodo handleAddTodo={handleAddTodo} />
            {todoList.map((todo,index) => {
                return <TodoCard  key={index} todo={todo} handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo} />
            })}
        </section>
    )
}

export default TodoContainer