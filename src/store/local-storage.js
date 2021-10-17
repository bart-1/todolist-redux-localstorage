export const saveToLocalStorage = store => {
    try {
        const serializedData = JSON.stringify(store);
        localStorage.setItem('store-todolist', serializedData);
    } catch (error) {
        console.warn(`Local storage problem: ${error}`);
    }
};

export const loadFromLocalStorage = () => {
    try {
        const loadedData = localStorage.getItem('store-todolist');

        if (loadedData === null) {
            return undefined;
        }
        return JSON.parse(loadedData);

    } catch (error) {
        console.warn(`Local storage problem: ${error}`);
        return undefined;
    }
}