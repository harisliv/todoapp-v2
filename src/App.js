import React, { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import List from "./components/List";
import "./styling/App.css";
import SelectIcon from "./UI/SelectIcon";

function App() {
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState("all");
  const [toggleSelectAllIcon, setToggleSelectAllIcon] = useState(true);

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
    setTodos((prev) =>
      prev.map((todo) => {
        return { ...todo, completed: toggleSelectAllIcon };
      })
    );
    setToggleSelectAllIcon(!toggleSelectAllIcon);
  };


  return (
    <>
      <h1 className="appTitle">Haris Liv ToDo App</h1>
      <div className="App">
          <SelectIcon
            className={toggleSelectAllIcon ? "fa-sort-down" : "fa-caret-up"}
            onClick={selectAllHandler}
          /> 
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
