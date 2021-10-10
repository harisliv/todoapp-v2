import React from "react";

const Search = (props) => {
  return (
    <>
      <input
        id="search"
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search ToDos"
      />
    </>
  );
};

export default Search;
