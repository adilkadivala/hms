require("dotenv").config();
const express = require("express");
const app = express();
const Connection = require("./src/database/connection");

const PORT = process.env.SERVER_PORT;

Connection.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log("connected");
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });
