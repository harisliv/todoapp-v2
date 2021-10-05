import React, { useState } from "react";
import ListItem from "./components/ListItem";
import "./List.css";

const List = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
  const [updateId, setUpdateID] = useState("");
  const [updateInput, setUpdateInput] = useState("");
  const [completed, setCompleted] = useState(false);

  const deleteHandlerTodo = (id) => {
    deleteTodo(id);
  };

  const showUpdateForm = (id, content) => {
    setUpdateID(id);
    setUpdateInput(content);
  };

  const changeHandlerForm = (event) => {
    setUpdateInput(event.target.value);
  };

  const submitHandlerForm = (event) => {
    event.preventDefault();
    updateTodo(updateId, updateInput);
    setUpdateInput("");
    setUpdateID("");
  };

  const clickHandlerCheckbox = (id) => {
    completeTodo(id);
  };

  const changeHandlerCheckbox = (event) => {
    setCompleted(event.target.value);
  };

  return (
    <ul>
      {todos.map((todo) =>
        updateId === todo.id ? (
          <form key={todo.id} onSubmit={submitHandlerForm} className='updateForm'>
            <input
              type="text"
              value={updateInput}
              autoComplete="off"
              onChange={changeHandlerForm}
            />
            <button disabled={updateInput === ''} type="submit">Submit!</button>
          </form>
        ) : (
          <ListItem
            key={todo.id}
            className={todo.completed ? "completed listItem" : "pending listItem"}
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
              onClick={() => deleteHandlerTodo(todo.id)}
            >
              Delete!
            </button>
            <input
              type="checkbox"
              onChange={changeHandlerCheckbox}
              checked={todo.completed}
              value={completed}
              onClick={() => clickHandlerCheckbox(todo.id)}
            />
          </ListItem>
        )
      )}
    </ul>
  );
};

export default List;
