const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    username: { type: String, required: true },
    commentText: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
