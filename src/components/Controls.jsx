import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  setNewTodoInput,
  setDone,
  selectDone,
} from "../features/todo/todoSlice";

const Controls = () => {
  const dispatch = useDispatch();
  const done = useSelector(selectDone);

  return (
    <div className="controls">
      <label htmlFor="task">Task</label>
      <input
        id="task"
        type="text"
        onInput={(e) => {
          dispatch(setNewTodoInput(e.target.value));
        }}
      />
      <button onClick={() => dispatch(addNewTodo())}>Add</button>
      <div>
        <button onClick={() => dispatch(setDone())}>
          {done ? "Undone" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default Controls;
