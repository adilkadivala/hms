const { Appointment } = require("../database/models/index");

// getting Appointment data

const getAppointment = async (req, res) => {
  try {
    const data = await Appointment.findAll();
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
