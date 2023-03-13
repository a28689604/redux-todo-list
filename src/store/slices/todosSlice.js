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
      // name:'washing dishes',
      // status: 0> (to do) 1> (in progress) 2> (done)
      //}
    },
    changeTodoStatus(state, action) {
      // Assumption:
      // action.payload === {
      // id: 'one of the todo's id',
      // changeTo: 'to do'
      //}
    },
  },
});
