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
    // Convert transform object to a valid CSS transform string
    transform: CSS.Translate.toString(transform),
    // Add green border when the card is being dragged
    border: isDragging ? "2px solid green" : undefined,
  };

  return (
    <Paper
      sx={{ p: 2, my: 2 }}
      style={style}
      ref={setNodeRef} // Set the reference to the DOM node for the draggable card
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
