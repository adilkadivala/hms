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

// create appointment
const createAppointment = async (req, res) => {
  const fields = {
    patient_id: req.body.patient_id,
    hospital_id: req.body.hospital_id,
    doctor_id: req.body.doctor_id,
    Appointment_type: req.body.Appointment_type || "today",
    Appointment_req: req.body.Appointment_req || Date.now(),
    Status: req.body.Status || "pending",
    appointment_scheduled_date:
      req.body.appointment_scheduled_date || Date.now(),
    token_number: req.body.token_number || "TN123456",
    Created_by: req.body.Created_by || "admin",
    Updated_by: req.body.Updated_by || "admin",
    Approved_by: req.body.Approved_by || "admin",
    Approved_date: req.body.Approved_date || Date.now(),
  };

  try {
    const data = await appointments.create(fields);
    console.log(data);
    res.status(200).json({ message: "Appointment created successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update appointment
const updateApointment = async (req, res) => {
  const fields = {
    patient_id: req.body.patient_id,
    hospital_id: req.body.hospital_id,
    doctor_id: req.body.doctor_id,
    Appointment_type: req.body.Appointment_type || "today",
    Appointment_req: req.body.Appointment_req || Date.now(),
    Status: req.body.Status || "pending",
    appointment_scheduled_date:
      req.body.appointment_scheduled_date || Date.now(),
    token_number: req.body.token_number || "TN123456",
    Created_by: req.body.Created_by || "admin",
    Updated_by: req.body.Updated_by || "admin",
    Approved_by: req.body.Approved_by || "admin",
    Approved_date: req.body.Approved_date || Date.now(),
  };
  console.log(req.body);
  try {
    const { id } = req.params;
    const appointment = await appointments.findOne({ where: { id } });
    if (!appointment) {
      return res.status(404).json({ message: "appointment not found" });
    }
    await appointment.update(fields);

    res
      .status(200)
      .json({ message: "Profile updated successfully", data: appointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete appointment
const deleteappointment = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await appointments.destroy({ where: { id: id } });
    res.status(200).json({ message: "appointment deleted successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAppointment,
  createAppointment,
  updateApointment,
  deleteappointment,
};
