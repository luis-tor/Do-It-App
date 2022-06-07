import React from "react";

function TodoItem(props){
    return (        
        <li>
            <span>C</span>
            <p>{props.todo.text}</p>
            <span>X</span>

        </li>
    );
}

export {TodoItem};