require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log("connected");
});
