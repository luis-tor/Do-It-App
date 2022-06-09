import React from "react";

function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValue = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return (        
        <input className="search-todo" placeholder="Buscar tareas" value={searchValue} onChange={onSearchValue}/>
    );
}

export {TodoSearch};