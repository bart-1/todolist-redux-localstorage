import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const DoneTasksList = ({ tasks }) => {
    console.log(tasks);
    const filteredTasks = tasks.filter(task => !task.taskStatus);
    const tasksList = filteredTasks.map(task => <Task key={task.taskId} {...task} />);
    return (
        <>
            <table>
                <caption>Zadanie zakończone</caption>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Zadanie</th>
                        <th>Zarządzaj</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksList}
                </tbody>
            </table>
        </>
    );
}

const connectStateToProps = store => ({
    tasks: store.tasks,
});

const DoneTasksListConsumer = connect(connectStateToProps)(DoneTasksList);

export default DoneTasksListConsumer;