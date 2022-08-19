require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = require("../config/connection");
const User = require("../models/User");
const Thought = require("../models/Thought");
const user = require("./user.json");
const thought = require("./thought.json");

const init = async () => {
  try {
    await connectToDatabase();
    console.log("successfully connected to the DB");

    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log("successfully drop the DB");

    await User.insertMany(user);
    await Thought.insertMany(thought);
    console.log("successfully seed the DB");
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);

    throw new Error("Failed to seed DB");
  }
  process.exit(0);
};

init();
