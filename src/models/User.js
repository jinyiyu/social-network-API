const { model, Schema } = require("mongoose");

const userSchema = {
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    // Must match a valid email address (look into Mongoose's matching validation)
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
};

const schema = new Schema(userSchema);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", schema);

module.exports = User;
