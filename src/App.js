import { useState } from "react/cjs/react.development";
import "./App.css";
import Filter from "./Filter";
import Form from "./Form";
import List from "./List";

function App() {
  const [todos, setTodos] = useState([]);

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
    // console.log(id)
    // console.log(content)
    const newContent = { id: id, content: content, completed: false };
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? newContent : todo))
    );
  };

  const completeTodo = (id) => {
    const found = todos.find((todo) => todo.id === id);
    // console.log(found);
    const newTodo = { ...found, completed: !found.completed };
    // console.log(newTodo);
    setTodos((prev) => prev.map((todo) => (todo.id === id ? newTodo : todo)));
  };

  const filterTodo = (type) => {
    console.log(type)
    if (type === "done") {
     const doneArr = todos.filter((todo) => todo.completed === true);
    //  console.log(doneArr);
    //  return doneArr;
    } else if (type === "pending") {
      const pendingArr = todos.filter((todo) => todo.completed === false);
    //  console.log(pendingArr);
    //  return pendingArr;
    } else {
      // return todos;
    }
  };

  console.log(filterTodo());

  return (
    <div className="App">
      <Filter filterTodo={filterTodo} />
      <br />
      <Form formSubmit={formSubmitHandler} />
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
