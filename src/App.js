import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
// import './App.css';
import illustration from './images/data.svg';

const todosDemo =[
  {text: 'Learn JavaScript', completed: true},
  {text:'Learn React', completed: false},
  {text:'Learn Vue', completed: false},
  {text:'Learn Angular', completed: false},
  {text:'Learn Node', completed: false},
  {text:'Learn MongoDB', completed: false},
  {text:'Learn GraphQL', completed: false},
  {text:'Learn NextJS', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(todosDemo);
  const [searchValue, setSearchValue] = React.useState('');

  const completeToDo = todos.filter(todo => todo.completed).length;
  const totalToDo = todos.length;

  let searchedTodos = [];
  if (searchValue.length > 0) {
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    searchedTodos= filteredTodos;
  }else{
    searchedTodos = todos;
  }

  return (
    <React.Fragment>
      <section className="todoapp">
        <h2>Create a new test</h2>
        <CreateTodoButton/>
        <img src={illustration} alt=""/>
      </section>

      <section className="todolist">
        <TodoCounter 
          totalToDo={totalToDo}
          completeToDo={completeToDo}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem key={todo.text} todo={todo}  />
          ))}
        </TodoList>
      </section>
      
      
    </React.Fragment>
  );
}

export default App;
