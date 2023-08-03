import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
import { Todo } from "./../../components/Main";

interface stateType {
  todos: Todo[];
}

const initialState: stateType = {
  todos: [
    {
      id: shortid.generate(),
      title: "리액트 공부하기1",
      body: "리액트 기초를 공부해봅시다.1",
      isDone: false,
    },
    {
      id: shortid.generate(),
      title: "리액트 공부하기2",
      body: "리액트 기초를 공부해봅시다.2",
      isDone: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
      return state;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const deletedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = deletedTodos;
      return state;
    },
    switchTodo: (state, action: PayloadAction<string>) => {
      const switchedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else return todo;
      });
      state.todos = switchedTodos;
      return state;
    },
  },
});

export const { addTodo, deleteTodo, switchTodo } = todoSlice.actions;
export default todoSlice.reducer;
