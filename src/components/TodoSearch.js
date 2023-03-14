import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const TodoSearch = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.toDos.searchTerm;
  });

  const handleSearchChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <Paper component="form" sx={{ display: "flex", alignItems: "center" }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="搜尋" value={searchTerm} onChange={handleSearchChange} />
      <IconButton type="submit" sx={{ p: "10px", mr: 1 }} aria-label="search" disabled>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default TodoSearch;
