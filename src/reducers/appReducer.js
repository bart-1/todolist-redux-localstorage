import {
    ADD_TASK,
    CHANGE_TASKS_STATUS,
    DELETE_TASK,
    EDIT_TASK,
} from "../actions/appActions";

export const appReducer = (state = [], actions) => {
    switch (actions.type) {
        case ADD_TASK:
            return [...state, actions.payload];
        case CHANGE_TASKS_STATUS:
            return state.map(task => {
                if (actions.payload.taskId === task.id) {
                    return task = {
                        taskBody,
                        taskDate,
                        taskId,
                        taskStatus: !taskStatus,
                    }
                }
                return task;
            });
        case DELETE_TASK:
            return state.filter(actions.payload.taskId !== task.id);
        case EDIT_TASK:
            return state.map(task => {
                if (actions.payload.taskId === task.id) {
                    return task = {
                        taskBody: actions.payload.taskBody,
                        taskDate: actions.payload.taskDate,
                        taskId,
                        taskStatus,
                    };
                }
                return task;
            });
        default:
            console.warn(`unknown type: ${actions.type}`);
            return state;

    }
};