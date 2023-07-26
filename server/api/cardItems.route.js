import express from "express";
const router = express.Router();
import List from "../models/listSchema.js";

router.get("/", (req, res) => {
    List.find({}, (err, lists) => {
        if (err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(200).json(lists);
        }
    })    
})

export default router;