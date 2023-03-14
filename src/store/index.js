import { configureStore } from "@reduxjs/toolkit";
import { changeSearchTerm, addTodo, removeTodo, changeDoneStatus, toDosReducer, changeDoneAt } from "./slices/toDosSlice";
import { changeContent, changeStatus, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    toDos: toDosReducer,
    form: formReducer,
  },
});

export { store, changeSearchTerm, addTodo, removeTodo, changeDoneStatus, toDosReducer, changeContent, changeStatus, formReducer, changeDoneAt };
