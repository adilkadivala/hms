const { Hospital_review } = require("../database/models/index");

// getting Hospital_review data

const getHospital_review = async (req, res) => {
  try {
    const data = await Hospital_review.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getHospital_review };
