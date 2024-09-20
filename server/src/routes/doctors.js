const express = require("express");
const doctorRouter = express.Router();
const uploads = require("../middlewares/uploads");
const doctorController = require("../controllers/doctors");

doctorRouter.get("/getdoctors", doctorController.getDoctors);

doctorRouter.post(
  "/insertdoctors",
  uploads.single("Profile_image"),
  doctorController.insertDoctor
);
doctorRouter.put(
  "/updatedoctors/:id",
  uploads.single("Profile_image"),
  doctorController.updateDoctorProfile
);

doctorRouter.delete("/deletedoctor/:id", doctorController.deleteDoctor);

module.exports = doctorRouter;
