const express = require("express");
const hospitalRoute = express.Router();
const hospitalController = require("../controllers/hospitals");

hospitalRoute.get("/gethospitals", hospitalController.getHospitals);

module.exports = hospitalRoute;
