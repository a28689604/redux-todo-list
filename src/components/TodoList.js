import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeDoneStatus, removeTodo, changeDoneAt } from "../store";
import TodoItem from "./TodoItem";
const TodoList = ({ done }) => {
  const dispatch = useDispatch();
  const toDos = useSelector(({ toDos: { data, searchTerm } }) => {
    return data.filter((todo) => todo.content.toLowerCase().includes(searchTerm.toLowerCase()) && todo.done === done);
  });
  // const toDos = useSelector((state) => state.toDos.data);

  const handleToDoDelete = (todo) => {
    dispatch(removeTodo(todo.id));
  };

  const handleStatusChange = (todo) => {
    // 準備變完成
    if (!todo.done) {
      dispatch(changeDoneAt(todo.id));
    }
    dispatch(changeDoneStatus(todo.id));
  };

  const renderToDos = toDos.map((todo) => (
    <TodoItem
      key={todo.id}
      content={todo.content}
      done={todo.done}
      onDelete={() => handleToDoDelete(todo)}
      onCheckChange={() => handleStatusChange(todo)}
      createAt={todo.createAt}
      doneAt={todo.doneAt}
    />
  ));

  return (
    <>
      <Typography variant="h5" mb={0.5} sx={{ fontWeight: "bold", textAlign: "center" }}>
        {done ? "完成" : "待辦"}
      </Typography>
      <Stack spacing={1} sx={{ border: "1px solid", borderRadius: "4px", p: 1 }} minHeight="200px">
        {renderToDos}
      </Stack>
    </>
  );
};
export default TodoList;
