import "./App.css";
import * as React from "react";
import { DndContext } from "@dnd-kit/core";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Column from "./components/Column";
import { useState, useEffect } from "react";

function App() {
  // todo: change this dummy data with the real world data from the database
  const [todoItems, setTodoItems] = useState(["cook", "Sleep"]);
  const [progressItems, setProgressItems] = useState(["Eat"]);
  const [doneItems, setDoneItems] = useState([]);

  const addTask = (item) => {
    setTodoItems([...todoItems, item]);
  };

  const handleDragEnd = (event) => {
    // Get the ID of the container where the item was dropped
    const container = event.over.id;
    // Get the title of the dragged item
    const title = event.active.data.current.title;
    // Get the ID of the parent container
    const parent = event.active.data.current.parent;

    // If the item was dropped into a different container than its parent
    if (container !== parent) {
      // Add the items to the respective lists
      if (container === "ToDo") {
        setTodoItems([...todoItems, title]);
      } else if (container === "Progress") {
        setProgressItems([...progressItems, title]);
      } else if (container === "Done") {
        setDoneItems([...doneItems, title]);
      }
    }

    // If the item was dropped into a different container than its parent
    if (container !== parent) {
      // Remove the item from the respective lists
      if (parent === "ToDo") {
        setTodoItems((prevItems) => prevItems.filter((item) => item !== title));
      } else if (parent === "Progress") {
        setProgressItems((prevItems) =>
          prevItems.filter((item) => item !== title)
        );
      } else if (parent === "Done") {
        setDoneItems((prevItems) => prevItems.filter((item) => item !== title));
      }
    }
  };

  return (
    <React.Fragment>
      <Container fixed>
        <DndContext onDragEnd={handleDragEnd}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ my: 2 }} spacing={2}>
              <Grid xs={4}>
                <Column title="ToDo" items={todoItems} addTask={addTask} />
              </Grid>
              <Grid xs={4}>
                <Column title="Progress" items={progressItems} />
              </Grid>
              <Grid xs={4}>
                <Column title="Done" items={doneItems} />
              </Grid>
            </Grid>
          </Box>
        </DndContext>
      </Container>
    </React.Fragment>
  );
}

export default App;
