const { Schema } = require("mongoose");

const schema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    autoIndex: true,
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 180,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
};

const reactionSchema = new Schema(schema, {
  timestamps: true,
});

module.exports = reactionSchema;
