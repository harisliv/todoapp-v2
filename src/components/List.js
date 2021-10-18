import React, { useState, useEffect, useRef } from "react";
import ListItem from "../UI/ListItem";
import "../styling/List.css";

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

  const clickHandlerCheckbox = (id) => {
    completeTodo(id);
  };

  const changeHandlerCheckbox = (event) => {
    setCompleted(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      updateTodo(updateId, updateInput);
      setUpdateInput("");
      setUpdateID("");
    }

    if (event.keyCode === 27) {
      setUpdateID("");
      setUpdateInput("");
    }
  };

  return (
    <ul className="todoList">
      {todos.map((todo) =>
        updateId === todo.id ? (
          <form key={todo.id} className="updateForm" onKeyDown={handleKeyDown}>
            <input
              className="updateInput"
              type="text"
              value={updateInput}
              autoComplete="off"
              onChange={changeHandlerForm}
            />
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
            <label htmlFor={todo.id} className="customCheckBox">
              <div>
                <i className="fa fa-check"></i>
              </div>
            </label>
            <label className="contentTitle">{todo.content}</label>
            {todo.id === showIcons && (
              <i
                className="fas fa-pencil-alt editIcon controlIcon"
                onClick={() => showUpdateForm(todo.id, todo.content)}
              ></i>
            )}
            {todo.id === showIcons && (
              <i
                className="far fa-trash-alt deleteIcon controlIcon"
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
