const { Hospital_department } = require("../database/models/index");

// getting hospital_department data

const getHospital_Department = async (req, res) => {
  try {
    const data = await Hospital_department.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getHospital_Department };
