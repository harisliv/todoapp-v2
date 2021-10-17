import React, {useState} from "react";

const Form = ({formSubmit}) => {
    const [input, setInput] = useState('');

    const changeHandler = (event) => {
        setInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(input);
        formSubmit(input);
        setInput('');
    }

    const handleKeyPress = (event) => {
      if (event.keyCode === 13) {
        submitHandler();
      }
    }

  return (
    <form className="newTodoForm" onSubmit={submitHandler}>
      <i class="fas fa-sort-down selectAllIcon"></i>
      <input
        type="text"
        name="main_input"
        autoComplete="off"
        value={input}
        onChange={changeHandler}
        onKeyPress={handleKeyPress}
        className="mainInput"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default Form;
