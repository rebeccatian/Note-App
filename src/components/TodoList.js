import React, { Fragment } from 'react';
import { useSelector} from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => {
        return state.tasks;
    });

    const uncompletedItems = todos.filter(item => item.status === false)
    const completedItems = todos.filter(item => item.status === true);

    return (
        <Fragment>
            {
                uncompletedItems.length > 0 ? (
                    <div className='uncompleted'>
                    <h2>To-Do</h2>
                    <ul>
                        {
                            uncompletedItems.map(item => (
                                <TodoItem key={item.task} task={item.task} status={item.status}/>
                            ))
                        }
                    </ul>
                </div>
                ) : null
            }
            {
                completedItems.length > 0 ? (
                    <div className='completed'>
                        <h2>Completed</h2>
                        <ul>
                        {
                                todos.filter(item => item.status === true).map(item => (
                                    <TodoItem key={item.task} task={item.task} status={item.status}/>
                                ))
                            }
                        </ul>
                </div>
                ) : null
            }
        </Fragment>
    );
}

export default TodoList;