import React from "react";

function CreateTodoButton(){
    return (
        <form className="create-todo-form">
            <input type="text" placeholder="Create a new todo" />
            <button type="button">Create</button>
        </form>
    );
}

export {CreateTodoButton};