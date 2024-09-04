const express = require("express");
const patientRoute = express.Router();
const patientController = require("../controllers/patients");

patientRoute.get("/getpatients", patientController.getPatients);

module.exports = patientRoute;
