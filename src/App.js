import { useState } from "react/cjs/react.development";
import "./App.css";
import Filter from "./Filter";
import Form from "./Form";
import List from "./List";

function App() {
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState("all");

  const changeFilterHandler = (event) => {
    setChecked(event.target.value);
  };

  const formSubmitHandler = (input) => {
    setTodos((prev) =>
      prev.concat({
        id: Math.floor(Math.random() * 10000),
        content: input,
        completed: false,
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, content) => {
    const newContent = { id: id, content: content, completed: false };
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? newContent : todo))
    );
  };

  const completeTodo = (id) => {
    const found = todos.find((todo) => todo.id === id);
    const newTodo = { ...found, completed: !found.completed };
    setTodos((prev) => prev.map((todo) => (todo.id === id ? newTodo : todo)));
  };

  const filterTodos = (filter) => {
    if (filter === "done") {
      const doneArr = todos.filter((todo) => todo.completed === true);
      return doneArr;
    } else if (filter === "pending") {
      const pendingArr = todos.filter((todo) => todo.completed === false);
      return pendingArr;
    } else if (filter === "all") {
      return todos;
    }
  };

  const itemsLeft = todos.filter((todo) => todo.completed === false).length;

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => todo.completed === false));
  };

  const selectAllHandler = () => {
    setTodos((prev) => prev.map((todo) => {
      return {...todo, completed: true}}))
  }

  return (
    <>
      <h1 className="appTitle">Haris Liv ToDo App</h1>
      <div className="App">
        <i class="fas fa-sort-down selectAllIcon" onClick={selectAllHandler}></i>
        <Form formSubmit={formSubmitHandler} />
        <List
          todos={filterTodos(checked)}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          completeTodo={completeTodo}
        />
        <div className="footer">
          <label className="itemsLeft">{itemsLeft} items left</label>
          <Filter onChange={changeFilterHandler} checked={checked} />
          <button className="clearCompleted" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
