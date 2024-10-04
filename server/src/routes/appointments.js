const express = require("express");
const appointmentRouter = express.Router();
const uploads = require("../middlewares/uploads");
const appointmentController = require("../controllers/appointments");

appointmentRouter.get("/getappointments", appointmentController.getAppointment);
appointmentRouter.post(
  "/createappointments",
  uploads.none(),
  appointmentController.createAppointment
);
appointmentRouter.put(
  "/updateappointments/:id",
  uploads.none(),
  appointmentController.updateApointment
);
appointmentRouter.patch(
  "/updateappointmentstatus/:id",
  uploads.none(),
  appointmentController.appointmentStatus
);
appointmentRouter.delete(
  "/deleteappointments/:id",
  appointmentController.deleteappointment
);

module.exports = appointmentRouter;
