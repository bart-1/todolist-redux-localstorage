import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTask, changeTaskStatus } from '../actions/appActions';

const Task = ({ taskBody, taskDate, taskId, taskStatus }) => {

    const dispatch = useDispatch();

    const handleOnClick = e => {
        if (e.target.name === 'done')
            dispatch(changeTaskStatus(taskId));

        if (e.target.name === 'delete')
            dispatch(deleteTask(taskId));
    }
    return (
        <tr>
            <td>{taskDate}</td>
            <td>{taskBody}</td>
            <td>
                <button onClick={handleOnClick} name={taskStatus ? "done" : "delete"}>{taskStatus ? 'Zrobione' : 'Usuń'}</button>
                <button>Edytuj</button>
            </td>
        </tr>
    );
}

export default Task;