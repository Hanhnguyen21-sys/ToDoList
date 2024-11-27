import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//{task} is an object passed from parent component which is a todowrapper
export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {

    // assume that when clicking the task -> we mark it as completed
    const handleOnClick = e =>{
        toggleComplete(task.id);
    }

    //delete task
    const handleDelete = e =>{
        deleteTodo(task.id);
    }

    //edit task
    const handleEdit = e =>{
        editTodo(task.id)
    }
    return (
        <div className='Todo'>
            <p onClick={handleOnClick} className={`${task.completed? 'completed' : 'incompleted'}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit}/>
                <FontAwesomeIcon icon={faTrash} onClick={handleDelete}/>
            </div>
        </div>
    );
}

