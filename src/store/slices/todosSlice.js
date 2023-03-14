import { createSlice, nanoid } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
  name: "toDos",
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
        content: action.payload,
        done: false,
        createAt: Date.now(),
        doneAt: "",
        id: nanoid(),
      });
    },
    removeTodo(state, action) {
      // action.payload === the id of the todo we want to remove
      const updated = state.data.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.data = updated;
    },
    changeDoneStatus(state, action) {
      const targetIndex = state.data.findIndex((todo) => todo.id === action.payload);
      state.data[targetIndex].done = !state.data[targetIndex].done;
    },
    changeDoneAt(state, action) {
      const targetIndex = state.data.findIndex((todo) => todo.id === action.payload);
      state.data[targetIndex].doneAt = Date.now();
    },
  },
});

export const { changeSearchTerm, addTodo, removeTodo, changeDoneStatus, changeDoneAt } = toDosSlice.actions;
export const toDosReducer = toDosSlice.reducer;
