import React from "react";
// props is always an 0bject
const Counter = (props) => {
  return (
    <div className="counter">
      <h1>{props.name}: 0</h1>
      <p>goal {props.goal}</p>
      <div className="counter-control">
        <button>add</button>
        <button>minus</button>
      </div>
    </div>
  );
};

export default Counter
