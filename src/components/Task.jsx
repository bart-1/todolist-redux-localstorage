import React from 'react';

const Task = ({ taskBody, taskDate, taskId }) => {
    return (
        <tr>
            <td>{taskDate}</td>
            <td>{taskBody}</td>
            <td>
                <button>Zrobione</button>
                <button>Edytuj</button>
            </td>
        </tr>
    );
}

export default Task;