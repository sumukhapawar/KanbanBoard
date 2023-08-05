import { Paper, Typography } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";
import AddTaskBtn from "./AddTask";

export default function Column({ title, items, addTask }) {
  const { setNodeRef, isOver } = useDroppable({
    id: title,
  });

  // Add blue border when an item is dragged over the column
  const style = { border: isOver ? "1px solid blue" : undefined };

  return (
    <Paper
      style={style}
      square
      sx={{ p: 3 }}
      elevation={10}
      component="div"
      ref={setNodeRef} // Set the reference to the DOM node for the droppable column
    >
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      {items.map((item) => {
        return <Card title={item} key={item} parent={title} />;
      })}
      {/* Render the AddTaskBtn component only for the "ToDo" column */}
      {title === "ToDo" ? <AddTaskBtn addTask={addTask} /> : null}
    </Paper>
  );
}
