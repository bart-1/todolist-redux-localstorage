export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASKS_STATUS = 'CHANGE_TASKS_STATUS';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = ({ taskBody, taskDate }) => ({
    type: ADD_TASK,
    payload: {
        taskBody,
        taskDate,
        taskId: Date.now(),
        taskStatus: true,
    },
});

export const changeTasksStatus = ({ taskId, taskStatus }) => ({
    type: CHANGE_TASKS_STATUS,
    payload: {
        taskId,
        taskStatus,
    },
});

export const deleteTask = taskId => ({
    type: DELETE_TASK,
    payload: {
        taskId,
    },
});

export const editTask = ({ taskBody, taskDate, taskId }) => ({
    type: EDIT_TASK,
    payload: {
        taskBody,
        taskDate,
        taskId,
    },
});

