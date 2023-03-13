import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./todosSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    content: "",
  },
  reducers: {
    changeName(state, action) {
      state.content = action.payload;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTodo, (state, action) => {
      state.content = "";
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
