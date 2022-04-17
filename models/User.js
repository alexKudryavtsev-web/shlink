const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  links: [
    {
      type: ObjectId,
      ref: "Link",
    },
  ],
});

module.exports = model("User", schema);
