const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointments");

appointmentRouter
  .route("/getappointments")
  .get(appointmentController.getAppointment);

module.exports = appointmentRouter;
