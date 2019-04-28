import React from "react";

function Alert(props) {
  return (
    <div
      className={`alert alert-${props.type}`}
      role="alert"
      style={{ textAlign: "center" }}
    >
      {props.children}
    </div>
  );
}

export default Alert;
