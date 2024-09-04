const { Doctor } = require("../database/models");

// getting Appointment data

const getDoctors = async (req, res) => {
  try {
    const data = await Doctor.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getDoctors,
};
