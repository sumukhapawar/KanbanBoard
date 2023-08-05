import express from "express";
import cors from "cors";
import cardItems from "./api/cardItems.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// Mount the cardItems route to the root path
app.use("/", cardItems);
// Fallback route for handling all other paths that are not found
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
