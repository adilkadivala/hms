const express = require("express");
const hospital_Department_router = express.Router();
const hospital_Department_controller = require("../controllers/hospital_department");

hospital_Department_router.get(
  "/getdepartments",
  hospital_Department_controller.getHospital_Department
);

module.exports = hospital_Department_router;
