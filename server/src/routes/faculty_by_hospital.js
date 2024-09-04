const express = require("express");
const faculty_by_hospital_Router = express.Router();
const Faculty_by_hospital_Controller = require("../controllers/faculty_by_hospital");

faculty_by_hospital_Router.get(
  "/getfacultybyhospital",
  Faculty_by_hospital_Controller.getFaculty_by_hospital
);

module.exports = faculty_by_hospital_Router;
