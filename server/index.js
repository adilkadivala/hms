require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Connection = require("./src/database/connection");
const router = require("./src/routes/index");

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(router);

// env. variables
const PORT = process.env.SERVER_PORT;

Connection.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`server is running on port no ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });
