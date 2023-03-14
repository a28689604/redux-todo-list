import { IconButton, Typography, Paper, Checkbox, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ content, onCheckChange, done, onDelete, createAt, doneAt }) => {
  const renderedDate = done ? "完成於 " + new Date(doneAt).toLocaleString() : "新增於 " + new Date(createAt).toLocaleString();
  return (
    <Paper sx={{ display: "flex", flexDirection: "column", p: 0.5 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Checkbox onChange={onCheckChange} checked={done} sx={{ p: 0.5 }} />
        <Typography sx={{ flex: "1 1 auto", ml: 1, wordBreak: "break-word" }} variant="body1">
          {content}
        </Typography>
        <IconButton type="button" sx={{ p: 1 }} onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Typography sx={{ alignSelf: "flex-end" }} variant="caption">
        {renderedDate}
      </Typography>
    </Paper>
  );
};

export default TodoItem;
