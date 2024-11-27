import React from 'react';
import { TodoForm } from './TodoForm';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditToDoForm';
uuidv4();

export const TodoWrapper = () => {
    //adding state/ user's input
    const [todos, setTodos] = useState([])
    // a function takes a task that user input from todoForm
    const addTodo = todo => {
        // ...todos -> existing todos array
        // uuidv4() => generate unique id
        setTodos([...todos,{id:uuidv4(), task: todo,completed: false, isEditing: false}])
        console.log(todos);
    }

    //the function will take an id of a completed task and map it with the todos array
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed}:todo));
    }

    //delete task
    const deleteTodo = id =>{
        setTodos(todos.filter(todo =>todo.id !== id)) //keep all tasks not having that id
    }

    //edit to do
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo))
    }


    //adding each components into wrapper
    return (
        //
        <div className = 'TodoWrapper'>
            <h1>Hanh Nguyen's ToDo List</h1>
            <TodoForm addTodo ={addTodo}/>
            {todos.map((todo,index) => (
                    todo.isEditing ? (<EditTodoForm editTodo={editTask} task ={todo}/>) : 
                    (<Todo task = {todo} key= {index} 
                    toggleComplete = {toggleComplete} 
                    deleteTodo = {deleteTodo} 
                    editTodo = {editTodo}/>)
                ))}
        </div>
    );
}

