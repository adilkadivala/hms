const express = require("express");
const router = express.Router();

const appointmentRouter = require("./appointments");
const hospitalRouter = require("./hospitals");
const doctorRouter = require("./doctors");
const patientRouter = require("./patients");
const authRoute = require("./authentication");

router.use("/", appointmentRouter);
router.use("/", hospitalRouter);
router.use("/", doctorRouter);
router.use("/", patientRouter);
router.use("/", authRoute);

module.exports = router;
