import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Paper, Typography } from "@mui/material";

export default function Card({ title, parent }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: title,
      data: {
        title,
        parent,
      },
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    border: isDragging ? "2px solid green" : undefined,
  };

  return (
    <Paper
      sx={{ p: 2, my: 2 }}
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      elevation={3}
      component="div"
      square
    >
      <Typography component="h3" variant="h5">
        {title}
      </Typography>
    </Paper>
  );
}
