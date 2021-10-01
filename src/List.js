import React, { useState } from "react";
import ListItem from "./components/ListItem";

const List = ({ todos, deleteTodo, updateTodo }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [editID, setEditID] = useState('');
  const [input, setInput] = useState('');

  const showUpdateForm = (id, content) => {
    !updateMode ? setUpdateMode(true) : setUpdateMode(false);
    setEditID(id);
    setInput(content);
  };

  const deleteHandler = (id) => {
    deleteTodo(id);
    console.log(id);
  };

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateTodo(editID, input);
    setInput('');
    setEditID('');
  };

  return (
    <ul>
      {todos.map((todo, index) =>
        editID === todo.id ? (
          <form key={index} onSubmit={submitHandler}>
            <input type="text" value={input} onChange={changeHandler} />
            <button type="submit">Submit!</button>
          </form>
        ) : (
          <ListItem key={index}>
            <h1>{todo.content}</h1>
            <button onClick={() => showUpdateForm(todo.id, todo.content)}>Update!</button>
            <button onClick={() => deleteHandler(todo.id)}>Delete!</button>
            <input type="checkbox" />
          </ListItem>
        )
      )}
    </ul>
  );
};

export default List;
