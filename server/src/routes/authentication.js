const express = require("express");
const authRouter = express.Router();
const authenticateController = require("../controllers/authentication");

authRouter.post("/check-user", authenticateController.loginDoctor);

module.exports = authRouter;
