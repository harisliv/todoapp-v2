import React from "react";

const ListItem = (props) => {
  return (
    <li
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </li>
  );
};

export default ListItem;
