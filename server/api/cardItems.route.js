import express from "express";
const router = express.Router();
import List from "../models/listSchema.js";
import Card from "../models/cardSchema.js";

// Retrieves the existing lists or creates three default lists (ToDo, Progress, Done) if none exist.
router.get("/", async (req, res) => {
  const defaultLists = [
    { name: "ToDo", cards: [] },
    { name: "Progress", cards: [] },
    { name: "Done", cards: [] },
  ];

  try {
    const lists = await List.find({});

    if (lists.length === 0) {
      const createdLists = await List.insertMany(defaultLists);
      res.redirect("/");
    } else {
      List.find()
        .populate("cards")
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/cards/add", async (req, res) => {
  try {
    const { title } = req.body;

    const todoList = await List.findOne({ name: "ToDo" });

    const newCard = new Card({ title, list: todoList._id });

    const savedCard = await newCard.save();

    await List.findByIdAndUpdate(todoList._id, {
      $push: { cards: savedCard._id },
    });

    res.json("Created and added card to the list");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
