const express = require("express");
const hospitalRoute = express.Router();
const hospitalController = require("../controllers/hospitals");
const uploads = require("../middlewares/uploads");

hospitalRoute.get("/gethospitals", hospitalController.getHospitals);
hospitalRoute.post(
  "/createhospital",
  uploads.single("H_image"),
  hospitalController.createHospital
);
hospitalRoute.put(
  "/updatehospital/:id",
  uploads.single("H_image"),
  hospitalController.updateHospital
);
hospitalRoute.delete("/deletehospital/:id", hospitalController.removeHospital);

module.exports = hospitalRoute;
