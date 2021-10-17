import React from 'react';
import { connect } from 'react-redux';

import { changeTaskStatus } from '../actions/appActions';

const Task = ({ taskBody, taskDate, taskId, changeTaskStatus }) => {

    const handleOnClick = () => {
        changeTaskStatus(taskId);
    }
    return (
        <tr>
            <td>{taskDate}</td>
            <td>{taskBody}</td>
            <td>
                <button onClick={handleOnClick}>Zrobione</button>
                <button>Edytuj</button>
            </td>
        </tr>
    );
}

const connectActionsToProps = ({
    changeTaskStatus,
})

const TaskConsumer = connect(null, connectActionsToProps)(Task);

export default TaskConsumer;