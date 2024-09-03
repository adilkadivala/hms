const express = require("express");
const router = express.Router();

const appointmentRouter = require("./appointments");

router.use("/", appointmentRouter);

module.exports = router;
