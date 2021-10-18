export const ADD_TASK = 'ADD_TASK';
export const CHANGE_EDIT_FLAG = 'CHANGE_EDIT_FLAG';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = ({ body, date }) => ({
    type: ADD_TASK,
    payload: {
        body,
        date,
        editFlag: false,
        id: Date.now(),
        status: true,
    },
});

export const changeEditFlag = id => ({
    type: CHANGE_EDIT_FLAG,
    payload: {
        id,
    },
});

export const changeTaskStatus = id => ({
    type: CHANGE_TASK_STATUS,
    payload: {
        id,
    },
});

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: {
        id,
    },
});

export const editTask = ({ body, date, id }) => ({
    type: EDIT_TASK,
    payload: {
        body,
        date,
        editFlag: false,
        id,
        status: true,
    },
});

