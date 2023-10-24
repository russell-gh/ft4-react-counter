import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Spinner from "./components/Spinner";

class App extends Component {
  state = { done: false };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    data.length = 7;
    this.setState({ todos: data });
  }

  componentDidUpdate() {
    console.log("State change detected!");
  }

  onToggleCompleted = (id) => {
    // console.log(id);
    const index = this.state.todos.findIndex((todo) => todo.id === id);

    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;

    this.setState({ todos });
  };

  onAddInput = (e) => {
    this.setState({ addInput: e.target.value });
  };

  onAddClick = () => {
    //do not allow duplicates
    const index = this.state.todos.findIndex(
      (todo) => todo.title === this.state.addInput
    );
    if (index > -1) {
      return; //todo already exists
    }

    //else add todo
    const todo = {
      title: this.state.addInput,
      completed: false,
      userId: 1,
      id: Math.round(Math.random() * 10000000),
    };

    const todos = [...this.state.todos];
    todos.unshift(todo);

    this.setState({ todos });
  };

  onSortByDone = () => {
    const todos = [...this.state.todos];

    todos.sort((item1, item2) => {
      if (item1.completed === true) {
        return -1;
      }
      if (item2.completed === true) {
        return 1;
      }
      return 0;
    });

    if (this.state.done) {
      todos.reverse();
    }

    this.setState({ todos, done: !this.state.done });
  };

  render() {
    console.log(this.state);
    const { todos, done } = this.state;

    if (!todos) {
      return <Spinner />;
    }

    return (
      <>
        <h1>Russells Todos!</h1>

        <label htmlFor="add"></label>
        <input onInput={this.onAddInput} type="text" id="add" />

        <button onClick={this.onAddClick}>Add</button>

        <div>
          <button onClick={this.onSortByDone}>
            {done ? "Undone" : "Done"}
          </button>
        </div>

        <ul>
          {todos.map((todo) => {
            return (
              <li
                onClick={() => this.onToggleCompleted(todo.id)}
                className={todo.completed ? "completed" : "not-completed"}
              >
                {todo.title}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
