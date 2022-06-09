import React from "react";

function TodoItem(props){
    const classSpan = props.todo.completed ? 'material-symbols-outlined check show-check' : 'material-symbols-outlined check hide-check';


    return (        
        <section className="todo-container">
            <div className="checkbox-simulation" ><span onClick={props.onComplete} className={classSpan}>done</span></div>
            <p className={`todo-text ${props.todo.completed && 'text-completed'}`}>{props.todo.text}</p>
            <p id="trash-icon" onClick={props.onDelete} className="material-symbols-outlined last-item">delete</p>
        </section>
    );
}

export {TodoItem};