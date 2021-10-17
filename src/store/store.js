import { createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { saveToLocalStorage, loadFromLocalStorage } from "./local-storage";

const loadedStore = loadFromLocalStorage()
const store = createStore(rootReducer, loadedStore);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;