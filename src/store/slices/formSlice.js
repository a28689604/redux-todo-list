import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./toDosSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    content: "",
  },
  reducers: {
    changeContent(state, action) {
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

export const { changeContent, changeStatus } = formSlice.actions;
export const formReducer = formSlice.reducer;
