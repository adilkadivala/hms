const express = require("express");
const paymentRoute = express.Router();
const paymentController = require("../controllers/payment");

paymentRoute.get("/getpayments", paymentController.getPayments);

module.exports = paymentRoute;
