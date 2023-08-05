import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  title: { type: String, required: true },
  list: { type: mongoose.ObjectId, ref: "List", required: true },
});

export default mongoose.model("Card", cardSchema);
