const { Appointment } = require("../database/models/index");

// getting appointment data

const getAppointment = async (req, res) => {
  try {
    const data = await Appointment.findAll();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getAppointment,
};
