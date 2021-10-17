import {
    ADD_TASK,
    CHANGE_TASK_STATUS,
    DELETE_TASK,
    EDIT_TASK,
} from "../actions/appActions";

export const appReducer = (state = [], actions) => {
    switch (actions.type) {
        case ADD_TASK:
            return [...state, actions.payload];
        case CHANGE_TASK_STATUS:
            return state.map(task => {
                if (actions.payload.taskId === task.taskId) {
                    return task = {
                        taskBody: task.taskBody,
                        taskDate: task.taskDate,
                        taskId: task.taskId,
                        taskStatus: false,
                    }
                }
                return task;
            });
        case DELETE_TASK:
            return state.filter(task => actions.payload.taskId !== task.taskId);
        case EDIT_TASK:
            return state.map(task => {
                if (actions.payload.taskId === task.taskId) {
                    return task = {
                        taskBody: actions.payload.taskBody,
                        taskDate: actions.payload.taskDate,
                        taskId: task.taskId,
                        taskStatus: task.taskStatus,
                    };
                }
                return task;
            });
        default:
            console.warn(`unknown type: ${actions.type}`);
            return state;

    }
};