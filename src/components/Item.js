import React from "react";

function Item(props) {
  return (
    <li className="list-group-item">
      <p>
        {props.quantity} <strong>{props.name}</strong> ({props.section})
      </p>
      <p>{props.notes}</p>
    </li>
  );
}

export default Item;
