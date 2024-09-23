const { hospitals } = require("../database/models/index");

// getting hospitala data

const getHospitals = async (req, res) => {
  try {
    const data = await hospitals.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getHospitals };
