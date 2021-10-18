import React, {useEffect, useRef, useState} from "react";
import '../styling/Form.css'

const Form = ({formSubmit}) => {
    const [input, setInput] = useState('');
    const inputRef = useRef('');

    useEffect(() => {
      inputRef.current.focus();
    }, [])

    const changeHandler = (event) => {
        setInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(input);
        formSubmit(input);
        setInput('');
    }

  return (
    <form className="newTodoForm" onSubmit={submitHandler}>
      <input
        ref={inputRef}
        className="mainInput"
        type="text"
        name="main_input"
        autoComplete="off"
        value={input}
        onChange={changeHandler}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default Form;
