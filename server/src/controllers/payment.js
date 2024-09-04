const { Payment } = require("../database/models/index");

// getting payment data

const getPayments = async (req, res) => {
  try {
    const data = await Payment.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getPayments };
