const express = require("express");
const doctorRouter = express.Router();
const doctorController = require("../controllers/doctors");

doctorRouter.get("/getdoctors", doctorController.getDoctors);

module.exports = doctorRouter;
