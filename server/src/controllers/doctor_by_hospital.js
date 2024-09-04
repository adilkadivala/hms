const { Doctor_by_Hospital } = require("../database/models/index");

// getting Doctor_by_Hospital data

const getDoctorsByHospitals = async (req, res) => {
  try {
    const data = await Doctor_by_Hospital.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getDoctorsByHospitals };
