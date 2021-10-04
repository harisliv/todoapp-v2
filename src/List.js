import React, { useState } from "react";
import ListItem from "./components/ListItem";
import "./List.css";

const List = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [editID, setEditID] = useState("");
  const [input, setInput] = useState("");

  const showUpdateForm = (id, content) => {
    !updateMode ? setUpdateMode(true) : setUpdateMode(false);
    setEditID(id);
    setInput(content);
  };

  const deleteHandler = (id) => {
    deleteTodo(id);
    // console.log(id);
  };

  const changeHandlerForm = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateTodo(editID, input);
    setInput("");
    setEditID("");
  };

  const changeHandlerCheckbox = (id) => {
    completeTodo(id);
  };

  return (
    <ul>
      {todos.map((todo, index) =>
        editID === todo.id ? (
          <form key={index} onSubmit={submitHandler}>
            <input
              type="text"
              value={input}
              autoComplete="off"
              onChange={changeHandlerForm}
            />
            <button type="submit">Submit!</button>
          </form>
        ) : (
          <ListItem
            key={index}
            className={
              todo.completed ? "completed listItem" : "pending listItem"
            }
          >
            <h1>{todo.content}</h1>
            <button
              disabled={todo.completed}
              onClick={() => showUpdateForm(todo.id, todo.content)}
            >
              Update!
            </button>
            <button
              disabled={todo.completed}
              onClick={() => deleteHandler(todo.id)}
            >
              Delete!
            </button>
            <input
              type="checkbox"
              onChange={() => changeHandlerCheckbox(todo.id)}
            />
          </ListItem>
        )
      )}
    </ul>
  );
};

export default List;
