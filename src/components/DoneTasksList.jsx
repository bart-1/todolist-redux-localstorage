import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const DoneTasksList = () => {

    const tasks = useSelector(store => store.tasks);
    const filteredTasks = tasks.filter(task => !task.status);
    const tasksList = filteredTasks.map(task => <Task key={task.id} {...task} />);
    return (
        <>
            <div className="done-tasks-table">
                <table className="caption-bottom-table ">
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
            </div>
        </>
    );
}

export default DoneTasksList;