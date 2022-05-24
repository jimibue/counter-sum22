import React, { useEffect, useState } from "react";
// props is always an 0bject
const Counter = (props) => {
  // see when we first mount to dom
  // the [] makes run on mount
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mounted");
  }, []);

  const add = () => {
    setCount(count + 1);
  };

  const getGoal = () => {
    // ES6 desctructing
    const { goal } = props;
    return `${goal.isOver ? ">" : "<"} ${goal.value} ${goal.unit}`;
  };
  
  const getStyle = () => {
    const {
      goal: { value, isOver },
    } = props;
    let color;
    if ((isOver && count >= value) || (!isOver && count < value)) {
      color = "green";
    } else {
      color = "red";
    }
    return { color };
  };

  return (
    <div className="counter">
      <h1 style={getStyle()}>
        {props.name}: {count}
      </h1>
      <p>goal: {getGoal()}</p>
      <div className="counter-control">
        <button onClick={add}>add</button>
        <button onClick={() => setCount(count - 1)}>minus</button>
      </div>
    </div>
  );
};

export default Counter;

// Coding
// a set way to do something or right way of doing something

// 1. does it work
// 2. does it work
// 3. code readability (you or coder looking at your code)
// 3a. DRY (Don't repeat yourself), indetantion, variables name
// 4. code maintainability:
// 5. efficient big O
