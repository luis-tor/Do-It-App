import React from "react";

function CreateTodoButton(props){
    const[todo, setTodo] = React.useState("");

    const addTodo = props.addTodo;
    
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const onAddTodo = (event) => {
        event.preventDefault();
        addTodo(todo);
    };

    return (
        <form onSubmit={onAddTodo} className="create-todo-form">
            <input type="text" value={todo} onChange={onChange} placeholder="Create a new todo" />
            <button type="submit">Create</button>
        </form>
    );
}

export {CreateTodoButton};