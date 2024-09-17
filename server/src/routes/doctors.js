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

doctorRouter.delete("/deletedoctor/:id", doctorController.deleteDoctor);

module.exports = doctorRouter;
