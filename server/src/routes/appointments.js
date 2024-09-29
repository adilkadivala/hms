const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointments");

appointmentRouter.get("/getappointments", appointmentController.getAppointment);
appointmentRouter.post(
  "/createappointments",
  appointmentController.createAppointment
);
appointmentRouter.put(
  "/updateappointments/:id",
  appointmentController.updateApointment
);
appointmentRouter.delete(
  "/deleteappointments/:id",
  appointmentController.deleteappointment
);

module.exports = appointmentRouter;
