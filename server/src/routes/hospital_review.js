const express = require("express");
const Hospital_review_router = express.Router();
const Hospital_review_controller = require("../controllers/hospital_review");

Hospital_review_router.get(
  "/gethospitalreviews",
  Hospital_review_controller.getHospital_review
);

module.exports = Hospital_review_router;
