import { useDispatch, useSelector } from "react-redux";
import {
  selectTodos,
  toggleCompleted,
  selectDone,
} from "../features/todo/todoSlice";
import { sort } from "../utils";

const Todos = () => {
  const todos = useSelector(selectTodos);
  const done = useSelector(selectDone);
  const dispatch = useDispatch();

  return (
    <ul>
      {sort(todos, done).map((todo) => {
        return (
          <li
            className={todo.completed ? "completed" : "not-completed"}
            onClick={() => dispatch(toggleCompleted(todo.id))}
            key={todo.id}
          >
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
