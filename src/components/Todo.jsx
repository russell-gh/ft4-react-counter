const Todo = ({ todo, onToggleCompleted }) => {
  return (
    <>
      <li
        className={todo.completed ? "completed" : "not-completed"}
        onClick={() => onToggleCompleted(todo.id)}
        key={todo.id}
      >
        {todo.title}
      </li>
    </>
  );
};

export default Todo;
