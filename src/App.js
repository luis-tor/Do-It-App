import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useLocalStorage } from "./hooks/useLocalStorage";
// import './App.css';
import illustration from './images/data.svg';


function App() {


  const {
    item: todos, 
    saveItem: setTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  
  const [searchValue, setSearchValue] = React.useState('');

  const completeToDo = todos.filter(todo => todo.completed).length;
  const totalToDo = todos.length;

  // Search Function
  let searchedTodos = [];
  if (searchValue.length > 0) {
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    searchedTodos= filteredTodos;
  }else{
    searchedTodos = todos;
  }

  
  const markTodo = (text) => {
    const indexOfTodo = todos.findIndex(t => t.text === text);
    const newTodos = [...todos];
    newTodos[indexOfTodo].completed = !newTodos[indexOfTodo].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const indexOfTodo = todos.findIndex(t => t.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexOfTodo, 1);
    setTodos(newTodos);
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
          
          {error && <p>Hubo un error...</p>}
          {loading && <p>Cargando...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea una tarea</p>}

          {searchedTodos.map(todo => (
            <TodoItem key={todo.text} 
              todo={todo}  
              onComplete={() => markTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          ))}
        </TodoList>
      </section>
      
      
    </React.Fragment>
  );
}

export default App;
