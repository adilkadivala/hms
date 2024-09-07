const { Doctor } = require("../database/models");

// getting Appointment

const getDoctors = async (req, res) => {
  try {
    const data = await Doctor.findAll();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// add Appointment

const insertDoctor = async (req, res) => {
  const data = {
    Doctor_name: req.body.Doctor_name,
    Doctor_degree: req.body.Doctor_degree,
    Doctor_experience: req.body.Doctor_experience,
    Doctor_speciality: req.body.Doctor_speciality,
    Profile_image: req.body.Profile_image,
    Contact_no: req.body.Contact_no,
    Alternate_contact: req.body.Alternate_contact,
    Whatsapp_no: req.body.Whatsapp_no,
    Email_id: req.body.Email_id,
    Address: req.body.Address,
    Country: req.body.Country,
    Region: req.body.Region,
    Password: req.body.Password,
    status: req.body.status,
    Approval_status: req.body.Approval_status,
    Created_by: req.body.Created_by,
    Updated_by: req.body.Updated_by,
    Approved_by: req.body.Approved_by,
    approved_date: req.body.approved_date,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  try {
    const doctor = await Doctor.create(data);
    res.status(200).json(doctor);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json("internal server error");
  }
};

module.exports = {
  getDoctors,
  insertDoctor,
};
