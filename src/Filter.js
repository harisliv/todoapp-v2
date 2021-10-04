import React, {useState} from "react";

const Filter = ({filterTodo}) => {

  const [checked, setChecked] = useState('all');
    
    const clickHandler = (event) => {
        console.log(event.target.value)
        filterTodo(event.target.value);
    }

    const changeHandler = (event) => {
      setChecked(event.target.value);
    }

  return (
    <div>
      <input
        type="radio"
        id="all"
        name="filter"
        value="all"
        onClick={clickHandler}
        onChange={changeHandler}
        checked={checked === 'all'}
      />
      <label htmlFor="all">Display All</label>
      <input
        type="radio"
        id="pending"
        name="filter"
        value="pending"
        onClick={clickHandler}
        onChange={changeHandler}
        checked={checked === 'pending'}
      />
      <label htmlFor="pending">Display Pending</label>
      <input
        type="radio"
        id="done"
        name="filter"
        value="done"
        onClick={clickHandler}
        onChange={changeHandler}
        checked={checked === 'done'}
      />
      <label htmlFor="done">Display Done</label>
    </div>
  );
};

export default Filter;
