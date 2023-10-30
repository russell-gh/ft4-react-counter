import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState();
  const [done, setDone] = useState(false);
  const [input, setInput] = useState("");

  const getTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    data.length = 7;

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  //functions than mess with the data
  const onToggleCompleted = (id) => {
    // console.log(id);
    const index = todos.findIndex((todo) => todo.id === id);

    const _todos = [...todos];
    _todos[index].completed = !todos[index].completed;

    setTodos(_todos);
  };

  const onSortByDone = () => {
    const _todos = [...todos];

    _todos.sort((item1, item2) => {
      if (item1.completed === true) {
        return -1;
      }
      if (item2.completed === true) {
        return 1;
      }
      return 0;
    });

    if (done) {
      _todos.reverse();
    }

    setTodos(_todos);
    setDone(!done);
  };

  const onAddClick = () => {
    //do not allow duplicates
    const index = todos.findIndex((todo) => todo.title === input);
    if (index > -1) {
      return; //todo already exists
    }

    //else add todo
    const todo = {
      title: input,
      completed: false,
      userId: 1,
      id: Math.round(Math.random() * 10000000),
    };

    const _todos = [...todos];
    _todos.unshift(todo);

    setTodos(_todos);
  };

  const onAddInput = (e) => {
    setInput(e.target.value);
  };

  //below is the return stuff
  if (!todos) {
    return <h1>Loading todos!</h1>;
  }

  return (
    <>
      <h1>Russells Todos!</h1>

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
      <ul>
        {todos.map((todo) => {
          return (
            <li
              className={todo.completed ? "completed" : "not-completed"}
              onClick={() => onToggleCompleted(todo.id)}
              key={todo.id}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
