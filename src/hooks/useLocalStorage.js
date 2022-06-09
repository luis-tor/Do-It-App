import React from 'react';

function useLocalStorage(key, initialValue) {
    const localStorageItem = localStorage.getItem(key);
    let parsedItem;

    if (localStorageItem) {
        parsedItem = JSON.parse(localStorageItem);
    }else{
        localStorage.setItem(key, JSON.stringify(initialValue));
        parsedItem = [];
    }
    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(key, stringifiedItem);
        setItem(newItem);
    }

    return [item, saveItem];
}

export {useLocalStorage};