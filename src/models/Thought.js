const { model, Schema } = require("mongoose");
const moment = require("moment");

const reactionSchema = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => moment(date),
  },
  Username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
};

const schema = new Schema(thoughtSchema);

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", schema);

module.exports = Thought;
