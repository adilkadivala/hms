const { appointments } = require("../database/models/index");

// getting s data

const getAppointment = async (req, res) => {
  try {
    const data = await appointments.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getAppointment,
};
