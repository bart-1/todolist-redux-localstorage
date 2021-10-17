import React from 'react';
import { connect } from 'react-redux';

import { deleteTask, changeTaskStatus } from '../actions/appActions';

const Task = ({ deleteTask, changeTaskStatus, taskBody, taskDate, taskId, taskStatus }) => {

    const handleOnClick = e => {
        if (e.target.name === 'done')
            changeTaskStatus(taskId);

        if (e.target.name === 'delete')
            deleteTask(taskId);
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

const connectActionsToProps = ({
    deleteTask,
    changeTaskStatus,
})

const TaskConsumer = connect(null, connectActionsToProps)(Task);

export default TaskConsumer;