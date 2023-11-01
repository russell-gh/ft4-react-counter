import { useSelector } from "react-redux";
import { selectTodos } from "../features/todo/todoSlice";
import Controls from "./Controls";
import Todos from "./Todos";

const Interface = () => {
  const todos = useSelector(selectTodos);

  //below is the return stuff
  if (!todos) {
    return <h1>Loading todos!</h1>;
  }

  return (
    <>
      <Controls />
      <Todos />
    </>
  );
};

export default Interface;
