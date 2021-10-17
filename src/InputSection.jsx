import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
    addTask,
    changeTasksStatus,
    editTask,
    tasksStore,
} from './actions/appActions';

const InputSection = () => {
    const [actualDate, setActualDate] = useState('');
    const [newTaskBody, setNewTakBody] = useState('');
    const [newTaskDate, setNewTaskDate] = useState('');

    useEffect(() => {
        const time = new Date();
        const parsedDate = time.getFullYear() + '-'
            + String(time.getMonth() + 1).padStart(2, '0') + '-'
            + String(time.getDate()).padStart(2, '0') + 'T'
            + String(time.getHours()).padStart(2, '0') + ':'
            + String(time.getMinutes()).padStart(2, '0');

        setActualDate(parsedDate);
        setNewTaskDate(parsedDate);

    }, []);

    const handleOnChange = e => {
        if (e.target.name === 'taskBody')
            setNewTakBody(e.target.value)

        if (e.target.name === 'taskDate')
            setNewTaskDate(e.target.value)
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        return null;
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <span>Zadanie</span>
            <textarea
                name="taskBody"
                onChange={handleOnChange}
                placeholder="wpisz..."
                value={newTaskBody}
            />
            <span>Data</span>
            <input
                min={actualDate}
                name="taskDate"
                onChange={handleOnChange}
                type="datetime-local"
                value={newTaskDate}
            />
            <button type="submit">Dodaj</button>
        </form>
    );
}

const connectActionsToProps = ({
    addTasks,
    changeTasksStatus,
    editTask
});

const connectStateToProps = store => ({
    tasksStore: store.tasks,
});


const InputSectionConsumer = connect(connectStateToProps, connectActionsToProps)(InputSection)

export default InputSectionConsumer;