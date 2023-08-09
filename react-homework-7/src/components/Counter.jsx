import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const Counter = () => {
  const { total, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {total}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;