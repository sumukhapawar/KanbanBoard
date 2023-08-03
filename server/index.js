import app from "./server.js";
import mongoose from "mongoose";
import "dotenv/config";

const port = process.env.PORT || 8000;
const uri = process.env.MONGO_URI;

// todo: set up connection string
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("DB connection error"));
