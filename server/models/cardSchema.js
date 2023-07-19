import mongoose, { mongo } from "mongoose";

const cardSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  list: { type: mongoose.Schema.Types.ObjectId, ref: "List", required: true },
});

export default mongoose.model("Card", cardSchema);
