import React from "react";

const Filter = ({checked, onChange}) => {
  return (
    <div>
      <input
        type="radio"
        id="all"
        name="filter"
        value="all"
        onChange={onChange}
        checked={checked === 'all'}
      />
      <label htmlFor="all">Display All</label>
      <input
        type="radio"
        id="pending"
        name="filter"
        value="pending"
        onChange={onChange}
        checked={checked === 'pending'}
      />
      <label htmlFor="pending">Display Pending</label>
      <input
        type="radio"
        id="done"
        name="filter"
        value="done"
        onChange={onChange}
        checked={checked === 'done'}
      />
      <label htmlFor="done">Display Done</label>
    </div>
  );
};

export default Filter;
