const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointments");

appointmentRouter.get("/getappointments", appointmentController.getAppointment);

module.exports = appointmentRouter;
