import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addTodo(state, action) {
      // Assumption:
      // action.payload === {
      // content:'washing dishes',
      // status: 0>(to do) 1>(done)
      //}
      state.data.push({
        content: action.payload.action,
        status: 0,
        createAt: Date.now(),
        doneAt: "",
      });
    },
    removeTodo(state, action) {
      // action.payload === the id of the todo we want to remove
      const updated = state.data.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.data = updated;
    },
    markDone(state, action) {
      const targetIndex = state.data.indexOf((todo) => todo.id === action.payload);
      state.data[targetIndex].status = 1;
    },
    undoDone(state, action) {
      const targetIndex = state.data.indexOf((todo) => todo.id === action.payload);
      state.data[targetIndex].status = 0;
    },
  },
});

export const { changeSearchTerm, addTodo, changeTodoStatus, removeTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
