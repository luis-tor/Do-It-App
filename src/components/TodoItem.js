import React from "react";

function TodoItem(props){
    const classSpan = props.todo.completed ? 'material-symbols-outlined show-check' : 'material-symbols-outlined hide-check';

    return (        
        <section className="todo-container">
            <div className="checkbox-simulation"><span className={classSpan}>done</span></div>
            <p className={`todo-text ${props.todo.completed && 'text-completed'}`}>{props.todo.text}</p>
            <p id="trash-icon" className="material-symbols-outlined last-item">delete</p>
        </section>
    );
}

export {TodoItem};