import { Grid, Container, Typography } from "@mui/material";
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" mb={3} mt={2} sx={{ fontWeight: "bold", textAlign: "center" }}>
        TodoList With RTK
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <TodoForm />
        </Grid>
        <Grid item xs={12} md={4}>
          <TodoSearch />
        </Grid>
        <Grid item xs={12} md={6}>
          <TodoList done={false} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TodoList done={true} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
