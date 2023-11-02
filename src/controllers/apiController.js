import axios from "axios";
import { setTodos } from "../features/todo/todoSlice";
import { store } from "../app/store";

export const getTodos = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos`
  );
  data.length = 7;

  store.dispatch(setTodos(data));
};
