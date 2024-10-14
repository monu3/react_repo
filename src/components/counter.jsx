import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(2);

  const increment = () => setCount(count * 2);
  const decrement = () => setCount(count / 2);

  return(
  <div>
    <h1>{count}</h1>

    <button onClick={increment}>*</button>
    <button onClick={decrement}>/</button>
  </div>)
};

export default Counter;
