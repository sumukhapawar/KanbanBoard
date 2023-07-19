import mongoose, { mongo } from "mongoose";

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
});

export default mongoose.model("List", listSchema);
