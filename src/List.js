import React, { useState } from "react";
import ListItem from "./components/ListItem";
import "./List.css";

const List = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
  const [updateId, setUpdateID] = useState("");
  const [updateInput, setUpdateInput] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showIcons, setShowIcons] = useState("");

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
    <ul className="todoList">
      {todos.map((todo) =>
        updateId === todo.id ? (
          <form
            key={todo.id}
            onSubmit={submitHandlerForm}
            className="updateForm"
          >
            <input
              type="text"
              value={updateInput}
              autoComplete="off"
              onChange={changeHandlerForm}
            />
            <button disabled={updateInput === ""} type="submit">
              Submit!
            </button>
          </form>
        ) : (
          <ListItem
            onMouseEnter={() => setShowIcons(todo.id)}
            onMouseLeave={() => setShowIcons("")}
            key={todo.id}
            className={
              todo.completed ? "completed listItem" : "pending listItem"
            }
          >
            <input
              id={todo.id}
              className="completedCheckbox"
              type="checkbox"
              onChange={changeHandlerCheckbox}
              checked={todo.completed}
              value={completed}
              onClick={() => clickHandlerCheckbox(todo.id)}
            />
            <label for={todo.id} className="customCheckBox">
              <div>
                <i class="fa fa-check"></i>
              </div>
            </label>
            <label className="contentTitle">{todo.content}</label>
            {todo.id === showIcons && (
              <i
                className="fas fa-edit editIcon"
                onClick={() => showUpdateForm(todo.id, todo.content)}
              ></i>
            )}
            {todo.id === showIcons && (
              <i
                className="far fa-window-close deleteIcon"
                onClick={() => deleteHandlerTodo(todo.id)}
              ></i>
            )}
          </ListItem>
        )
      )}
    </ul>
  );
};

export default List;
