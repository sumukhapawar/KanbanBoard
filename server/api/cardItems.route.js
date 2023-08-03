import express from "express";
const router = express.Router();
import List from "../models/listSchema.js";

router.get("/", (req, res) => {
    // List.find({}, (err, lists) => {
    //     if (err) {
    //         res.status(500).json({error: err.message});
    //     } else {
    //         res.status(200).json(lists);
    //     }
    // })    
    res.send('hello');
})

router.post("/cards/add", async (req, res) => {
    const newCard = new Card(req.body);

    await card.save();

    const listId = card.list;

    await list.findByIdAndUpdate(listId, {$push: {cards: card_id}})
})

export default router;