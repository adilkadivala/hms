const express = require("express");
const router = express.Router();

const appointmentRouter = require("./appointments");
const hospitalRoute = require("./hospitals");
const doctorByHospitalRoute = require("./doctor_by_hospital");
const doctorRouter = require("./doctors");
const patientRoute = require("./patients");
const paymentRoute = require("./payment");
const faculty_by_hospital_Router = require("./faculty_by_hospital");
const hospital_Department_router = require("./hospital_department");
const Hospital_review_router = require("./hospital_review");

router.use("/", appointmentRouter);
router.use("/", hospitalRoute);
router.use("/", doctorByHospitalRoute);
router.use("/", doctorRouter);
router.use("/", patientRoute);
router.use("/", paymentRoute);
router.use("/", faculty_by_hospital_Router);
router.use("/", hospital_Department_router);
router.use("/", Hospital_review_router);

module.exports = router;
