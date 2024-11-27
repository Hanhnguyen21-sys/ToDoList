import React from 'react';
import { useState } from 'react';
export const TodoForm = ({addTodo}) => {
    //useState is used to set status of variable
    // syntax: const [state, setState] = useState(initialState)
    const [value, setValue] = useState("")

    /**
     * Function to handle on change , it will take all characters users input
     */
    const handleChange = e =>{
        setValue(e.target.value); 
    }
    /**
     * Function to capture the state when we hit add task btn
     * onSubmit = {handlesubmit}
     */
    const handleSubmit = (e) => { 
        //by default when we hit submit, the page will be reloaded => prevent it 
        e.preventDefault();
        // pass the value we get or a task that user inputs to other components
        addTodo(value);
        setValue("");
    }
    //create a form to get user's input
    return (
        <form className = 'TodoForm' onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value ={value} placeholder="Enter a task" onChange={handleChange}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
}

