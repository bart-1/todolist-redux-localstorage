import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ToDoList = () => {

    const tasks = useSelector(store => store.tasks);
    const filteredTasks = tasks.filter(task => task.status);
    const tasksList = filteredTasks.map(task => <Task key={task.id} {...task} />);
    return (
        <>
            <table className="caption-top-table">
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

export default ToDoList;