import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const ToDoList = ({ tasks }) => {
    const filteredTasks = tasks.filter(task => task.taskStatus);
    const tasksList = filteredTasks.map(task => <Task key={task.taskId} {...task} />);
    return (
        <>
            <table>
                <caption>Lista rzeczy do zrobienia</caption>
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

const ToDoListConsumer = connect(connectStateToProps)(ToDoList);

export default ToDoListConsumer;