import React, { Fragment, useState } from 'react';
import { deleteTask, editTask, updateStatus } from '../redux/tasksSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({task, status}) => {
    const [value, setValue] = useState(task);
    const [isEdit , setIsEdit] = useState(false);

    const dispatch = useDispatch();

    const handleRemoveTask = () => {
        dispatch(
            deleteTask({
                task: task
            })
        )
    }

    const handleEditTask = () => {
        dispatch(
            editTask({
                task: task,
                newTask: value
            })
        )
        setIsEdit(false);
    }

    const handleChecked = e => {
        dispatch(
            updateStatus({
                task: task,
                status: e.target.checked
            })
        )
    }

    return (
        <li key={task}>
            <div className='task-content'>
                {
                    isEdit ? (
                        <Fragment>
                            <input style={{marginRight: '15px'}}type='text' value={value} onChange={e => setValue(e.target.value)}/>
                            <button onClick={handleEditTask}>Submit</button>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <input type='checkbox' checked={status} onChange={handleChecked}></input>
                            <p style={{marginLeft: '15px', textDecoration: status ? 'line-through' : 'none'}}> {task} </p>
                        </Fragment>
                    )
                }
            </div>
            <button className='remove-btn' onClick={handleRemoveTask}>
                Delete
            </button>
            <button style={{display: status || isEdit ? 'none' : 'block'}} onClick={() => setIsEdit(true)}>
                Edit
            </button>
        </li>
    )
}

export default TodoItem;