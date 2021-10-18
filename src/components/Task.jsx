import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTask, changeTaskStatus, changeEditFlag } from '../actions/appActions';

const Task = ({ body, date, id, status }) => {

    const dispatch = useDispatch();
    const tasks = useSelector(store => store.tasks);

    const taskWithEditFlag = tasks.filter(task => task.editFlag)

    const handleOnClick = e => {
        if (e.target.name === 'done')
            dispatch(changeTaskStatus(id));

        if (e.target.name === 'delete')
            dispatch(deleteTask(id));

        if (e.target.name === 'edit')
            dispatch(changeEditFlag(id));

    }
    return (
        <tr>
            <td>{date}</td>
            <td>{body}</td>
            <td>
                <button
                    name={status ? "done" : "delete"}
                    onClick={handleOnClick}
                >
                    {status ? 'Zrobione' : 'Usuń'}
                </button>
                {taskWithEditFlag.length
                    ? null
                    : <button
                        name="edit"
                        onClick={handleOnClick}
                    >
                        Edytuj
                    </button>
                }
            </td>
        </tr>
    );
}

export default Task;