import { useState } from "react/cjs/react.development";
import "./App.css";
import Filter from "./Filter";
import Form from "./Form";
import List from "./List";
import Search from "./Search";

function App() {
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState("all");
  const [search, setSearch] = useState('');

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
    switch (filter) {
      case "done":
        const doneArr = todos.filter((todo) => todo.completed === true);
      return doneArr;
      case "pending":
        const pendingArr = todos.filter((todo) => todo.completed === false);
        return pendingArr;
      case "search":
        const searchArr = todos.filter((todo) => todo.content.includes(search))
        return searchArr
      case "all":
        return todos;
    }
  };

  

  const changeSearchHandler = (event) => {
    setSearch(event.target.value);
    setChecked("search");
  }

  return (
    <div className="App">
      <Search value={search} onChange={changeSearchHandler} />
      <Filter onChange={changeFilterHandler} checked={checked} />
      <br />
      <Form formSubmit={formSubmitHandler} />
      <List
        todos={filterTodos(checked)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
