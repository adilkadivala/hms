const { Doctor } = require("../database/models");

// getting Doctors

const getDoctors = async (req, res) => {
  try {
    const data = await Doctor.findAll();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// add Doctor

const insertDoctor = async (req, res) => {
  const fields = {
    Doctor_name: req.body.Doctor_name,
    Doctor_degree: req.body.Doctor_degree,
    Doctor_experience: req.body.Doctor_experience,
    Doctor_speciality: req.body.Doctor_speciality,
    Profile_image: req.file ? req.file.path : null,
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
    const data = await Doctor.create(fields);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete Doctors

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Doctor.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getDoctors,
  insertDoctor,
  deleteDoctor,
};
