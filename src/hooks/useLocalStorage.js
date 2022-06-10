import React from 'react';

function useLocalStorage(key, initialValue) {
    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(key);
                let parsedItem;
            
                if (localStorageItem) {
                    parsedItem = JSON.parse(localStorageItem);
                }else{
                    localStorage.setItem(key, JSON.stringify(initialValue));
                    parsedItem = [];
                }

                setItem(parsedItem);
                setLoading(false);

            }catch(error){
                setError(true);
            }

        },1000);
    },[]);

    const saveItem = (newItem) => {
        try{
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(key, stringifiedItem);
            setItem(newItem);
        }catch(error){
            setError(true);
        }
    }

    return {item, saveItem, loading, error};
}

export {useLocalStorage};