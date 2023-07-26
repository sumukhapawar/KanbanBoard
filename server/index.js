import app from "./server.js";
import mongoose from "mongoose";
import "dotenv/config";

const port = process.env.PORT || 8000;

// todo: set up connection string
// mongoose
//   .connect("connection String")
//   .then(() => {
//     console.log("DB connected successfully");
// })
// .catch((err) => console.error("DB connection error"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
