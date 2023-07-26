import { Paper, Typography } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";

export default function Column({ title, items }) {
  const { setNodeRef, isOver } = useDroppable({
    id: title,
  });

  const style = { border: isOver ? "1px solid blue" : undefined };

  return (
    <Paper
      style={style}
      square
      sx={{ p: 3 }}
      elevation={10}
      component="div"
      ref={setNodeRef}
    >
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      {items.map((item, key) => {
        return <Card title={item} key={item} parent={title} index={key} />;
      })}
    </Paper>
  );
}
