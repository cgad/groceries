import React from "react";

function Jumbotron(props) {
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ textAlign: "center", marginBottom: 0 }}
    >
      <div className="container">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Jumbotron;
