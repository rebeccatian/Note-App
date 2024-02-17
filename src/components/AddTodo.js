import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTodo = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleOnSubmit = event => {
        event.preventDefault();
        if (value === '') {
            alert('Please enter a task.');
            return;
        }
        dispatch(
            addTask({
                task: value
            })
        )

        setValue('');
    }

    return (
        <div className='add-todo'>
            <form onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    className='input-field'
                    placeholder='Enter Task'
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onSubmit={handleOnSubmit}
                />
                <button type='submit' className='submit-btn'>
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default AddTodo;