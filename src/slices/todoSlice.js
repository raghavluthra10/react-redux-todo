import { createSlice } from "@reduxjs/toolkit";

const updateTodo = createSlice({
  name: "updateTodo",
  initialState: {
    todos: [
      { task: "task 1", id: 1 },
      { task: "task 2", id: 2 },
      { task: "task 3", id: 3 },
      { task: "task 4", id: 4 },
    ],
  },
  reducers: {
    addTodo: (state, param) => {
      const { payload } = param;
      state.todos = [...state.todos, payload];
    },
    deleteTask: (state, param) => {
      const { payload } = param;
      const stateAfterTaskDeleted = state.todos.filter(
        (task) => task.id !== payload
      );
      state.todos = [...stateAfterTaskDeleted];
    },
  },
});

export const { addTodo, deleteTask } = updateTodo.actions;
export default updateTodo.reducer;
