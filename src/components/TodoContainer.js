import React, { useState, useEffect } from 'react'
import './TodoContainer.css'
import AddTodo from './AddTodo'
import TodoCard from './TodoCard'
import axios from 'axios'

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        updateTodo()
    },[])

    const updateTodo = () => {
        const accessToken = localStorage.getItem('accessToken')
        const config = {
            headers: {
                authorization: accessToken
            }
        }
        axios.get('http://localhost:3100/todos/', config).then(response => {
            if (response.data.length > 0) {
                setTodoList(response.data)
            }
        }).catch((error) => {
            //error handle here
            alert("Error:", error)
        })
    }

    const handleAddTodo = (newTodo) => {
        axios.post('http://localhost:3100/todos/',newTodo).then(() => {
            updateTodo()
        }).catch((error) => {
            //error handle here
            alert("Error:", error)
        })
    }

    const handleEditTodo = (editedTodo) => {
        axios.put(`http://localhost:3100/todos/${editedTodo.id}`, editedTodo).then(() => {
            updateTodo()
        }).catch((error) => {
            //error handle here
            alert("Error:", error)
        })
    }

    const handleDeleteTodo = (todo) => {
        axios.delete(`http://localhost:3100/todos/${todo.id}`).then(() => {
            updateTodo();
        })
        .catch((error) => {
            //error handle here
            alert("Error:", error)
        })
    }

    return (
        <section>
            <AddTodo handleAddTodo={handleAddTodo} />
            {todoList.map((todo,index) => {
                return <TodoCard  key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
            })}
        </section>
    )
}

export default TodoContainer