const { model, Schema } = require("mongoose");

const authorSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Author", authorSchema);
