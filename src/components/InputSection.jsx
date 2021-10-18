import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
    addTask,
    editTask,
} from '../actions/appActions';

const InputSection = () => {
    const [actualDate, setActualDate] = useState('');
    const [editedTaskId, setEditedTaskId] = useState('');
    const [newTaskBody, setNewTaskBody] = useState('');
    const [newTaskDate, setNewTaskDate] = useState('');

    const dispatch = useDispatch();
    const tasksStore = useSelector(store => store.tasks);

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

    useEffect(() => {
        const task = tasksStore.find(task => task.editFlag)
        if (task) {
            setNewTaskBody(task.body);
            setEditedTaskId(task.id);
        }

    }, [tasksStore]);

    const handleOnChange = e => {
        if (e.target.name === 'body')
            setNewTaskBody(e.target.value)

        if (e.target.name === 'taskDate')
            setNewTaskDate(e.target.value)
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const newTask = {
            body: newTaskBody,
            date: newTaskDate,
            id: editedTaskId,
        };
        editedTaskId ? dispatch(editTask(newTask)) : dispatch(addTask(newTask));

        setNewTaskDate(actualDate);
        setNewTaskBody('');
        setEditedTaskId('');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <span>Zadanie</span>
            <textarea
                name="body"
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
            <button type="submit">{editedTaskId ? 'Edytuj' : 'Dodaj'}</button>
        </form>
    );
}

export default InputSection;