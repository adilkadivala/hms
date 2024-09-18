const express = require("express");
const router = express.Router();

const appointmentRouter = require("./appointments");
const hospitalRoute = require("./hospitals");
const doctorRouter = require("./doctors");
const patientRoute = require("./patients");

router.use("/", appointmentRouter);
router.use("/", hospitalRoute);
router.use("/", doctorRouter);
router.use("/", patientRoute);

module.exports = router;
