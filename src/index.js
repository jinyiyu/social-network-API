require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const connectToDatabase = require("./config/connection");

const connection = require("./config/connection");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT | 4000;

const init = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

init();
