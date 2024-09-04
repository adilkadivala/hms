const express = require("express");
const doctorByHospitalRoute = express.Router();
const doctorByHospitalController = require("../controllers/doctor_by_hospital");

doctorByHospitalRoute.get(
  "/getdoctorbyhospital",
  doctorByHospitalController.getDoctorsByHospitals
);

module.exports = doctorByHospitalRoute;
