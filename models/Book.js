// ./models/Book.model.js
const { model, Schema } = require("mongoose");

const bookSchema = new Schema(
  {
    title: String,
    year: Number,
    codeISBN: { type: String, maxlength: 13, unique: true },
    quantity: { type: Number, min: 0, default: 0 },
    lastPublished: { type: Date, default: Date.now },
    genre: {
      type: String,
      enum: ["romance", "fiction", "biography", "poetry"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Book", bookSchema);

// EXPORT THE MODEL
