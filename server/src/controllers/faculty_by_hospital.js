const { Faculty_by_hospital } = require("../database/models/index");

// getting hospital wise Faculty data

const getFaculty_by_hospital = async (req, res) => {
  try {
    const data = await Faculty_by_hospital.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getFaculty_by_hospital };
