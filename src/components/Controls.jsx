const Controls = ({ onAddInput, onAddClick, onSortByDone, done, todos }) => {
  return (
    <>
      {todos.length < 10 ? (
        <div>
          <label htmlFor="add"></label>
          <input onInput={onAddInput} type="text" id="add" />
          <button onClick={onAddClick}>Add</button>
        </div>
      ) : (
        <p>You are way too busy!</p>
      )}

      <div>
        <button onClick={onSortByDone}>{done ? "Undone" : "Done"}</button>
      </div>
    </>
  );
};

export default Controls;
