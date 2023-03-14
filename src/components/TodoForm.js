import { IconButton, InputBase, Paper } from "@mui/material";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";

import { useDispatch, useSelector } from "react-redux";
import { changeContent, addTodo } from "../store";

const TodoForm = () => {
  const dispatch = useDispatch();

  const content = useSelector((state) => {
    return state.form.content;
  });

  const handleContentChange = (event) => {
    dispatch(changeContent(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(content));

    dispatch(changeContent(""));
  };
  return (
    <Paper component="form" sx={{ display: "flex", alignItems: "center" }} onSubmit={handleSubmit}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="在此輸入待辦事項" value={content} onChange={handleContentChange} />
      <IconButton type="submit" sx={{ p: "10px", mr: 1 }} aria-label="submit">
        <SubdirectoryArrowLeftIcon />
      </IconButton>
    </Paper>
  );
};
export default TodoForm;
