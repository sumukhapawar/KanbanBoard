import { Button, TextField } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useState } from "react";

export default function AddTask({addTask}) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="filled"
        fullWidth
        size="small"
      />
      <Button
        variant="contained"
        color="success"
        startIcon={<AddCircleRoundedIcon />}
        fullWidth
        type="submit"
        sx={{ mt: 2 }}
      >
        Add Task
      </Button>
    </form>
  );
}
