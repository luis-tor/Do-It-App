import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
  {text:'Learn React', isCompleted: false},
  {text:'Learn Vue', isCompleted: false},
  {text:'Learn Angular', isCompleted: false},
  {text:'Learn Node', isCompleted: false},
  {text:'Learn MongoDB', isCompleted: false},
  {text:'Learn GraphQL', isCompleted: false},
  {text:'Learn NextJS', isCompleted: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} todo={todo} />
        ))}
      </TodoList>
      
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
