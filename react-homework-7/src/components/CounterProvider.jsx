import { createContext, useReducer } from "react";

export const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
        };
      case "decrement":
        return {
          count: state.count - 1,
        };
      case "reset":
        return {
          count: 0,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const value = {
    total: state.count,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: handleReset,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;