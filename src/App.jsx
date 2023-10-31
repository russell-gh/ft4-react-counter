import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const add = (num) => {
    dispatch({ type: "ADD", payload: num });
  };

  const minus = () => {
    dispatch({ type: "MINUS" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <button onClick={() => add(7)}>Add</button>
      {count}
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default App;
