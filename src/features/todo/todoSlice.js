import { createSlice } from "@reduxjs/toolkit";

const initialState = { done: false };

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    setTodos: (state, { payload }) => {
      /* destructure payload, as payload in action */
      state.todos = payload;
    },
    toggleCompleted: (state, { payload }) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
    setNewTodoInput: (state, { payload }) => {
      state.newTodoInput = payload;
    },
    addNewTodo: (state) => {
      //do not allow duplicates
      const index = state.todos.findIndex(
        (todo) => todo.title === state.newTodoInput
      );
      if (index > -1) {
        return; //todo already exists
      }

      state.todos.push({
        title: state.newTodoInput,
        completed: false,
        userId: 1,
        id: Math.round(Math.random() * 10000000),
      });
    },
    setDone: (state) => {
      state.done = !state.done;
    },
  },
});

export const {
  setTodos,
  toggleCompleted,
  setNewTodoInput,
  addNewTodo,
  setDone,
} = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;
export const selectDone = (state) => state.todo.done;

export default todoSlice.reducer;
