import {
    ADD_TASK,
    CHANGE_EDIT_FLAG,
    CHANGE_TASK_STATUS,
    DELETE_TASK,
    EDIT_TASK,
} from "../actions/appActions";

export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case CHANGE_EDIT_FLAG:
            return state.map(task => {
                if (action.payload.id === task.id) {
                    return task = {
                        body: task.body,
                        date: task.date,
                        editFlag: true,
                        id: task.id,
                        status: task.status,
                    }
                }
                return task;
            });
        case CHANGE_TASK_STATUS:
            return state.map(task => {
                if (action.payload.id === task.id) {
                    return task = {
                        body: task.body,
                        date: task.date,
                        editFlag: task.editFlag,
                        id: task.id,
                        status: false,
                    }
                }
                return task;
            });
        case DELETE_TASK:
            return state.filter(task => action.payload.id !== task.id);
        case EDIT_TASK:
            debugger
            return state.map(task => {
                if (action.payload.id === task.id) {
                    return task = {
                        body: action.payload.body,
                        date: action.payload.date,
                        editFlag: false,
                        id: task.id,
                        status: true,
                    };
                }
                return task;
            });
        default:
            console.warn(`unknown type: ${action.type}`);
            return state;

    }
};