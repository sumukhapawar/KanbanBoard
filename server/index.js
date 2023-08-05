import app from "./server.js";
import mongoose from "mongoose";
import "dotenv/config";

// Set the port for the server to listen on
const port = process.env.PORT || 8000;
// Get the MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected successfully");
    // Start the Express server after successful MongoDB connection
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("DB connection error"));
