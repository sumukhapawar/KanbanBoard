import express from "express";
import cors from "cors";
import cardItems from "./api/cardItems.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", cardItems);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
