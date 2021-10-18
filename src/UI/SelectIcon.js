import React from "react";

function SelectIcon(props) {
    const classes = `${props.className} fas selectAllIcon`;
  return <i className={classes} onClick={props.onClick}></i>;
}

export default SelectIcon;
