import React from "react";

function TodoCounter({totalToDo, completeToDo}) {
    return (
        <h2>You've been completed {completeToDo} to {totalToDo} TODOs</h2>
    );
}

export {TodoCounter};