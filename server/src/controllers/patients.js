const { Patient } = require("../database/models/index");

// getting patient data

const getPatients = async (req, res) => {
  try {
    const data = await Patient.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getPatients };
