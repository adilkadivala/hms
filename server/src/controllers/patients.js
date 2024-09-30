const { patients } = require("../database/models/index");

// getting patient data

const getPatients = async (req, res) => {
  try {
    const data = await patients.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// create patients

const createPatients = async (req, res) => {
  const fields = {
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    dob: req.body.dob,
    contact: req.body.contact,
    alt_contact: req.body.alt_contact,
    recovery_email: "john.recover@example.com",
    address: "123 Main St, Anytown, USA",
    country: "USA",
    city: "Anytown",
    status: "active",
    created_by: "admin",
    updated_by: "admin",
    approved_by: "admin",
    approved_date: "2024-09-23T14:40:54.000Z",
  };
};

module.exports = { getPatients };
