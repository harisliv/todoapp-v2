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

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="main_input"
        autoComplete="off"
        value={input}
        onChange={changeHandler}
      />
      <button disabled={input===''} type="submit">Submit!</button>
    </form>
  );
};

export default Form;
