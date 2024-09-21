const { Doctor } = require("../database/models");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

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
  const hashedPassword = await bcrypt.hash(req.body.Password, 10);

  const fields = {
    Doctor_name: req.body.Doctor_name,
    Contact_no: req.body.Contact_no,
    Email_id: req.body.Email_id,
    Password: hashedPassword,
    Doctor_degree: req.body.Doctor_degree,
    Doctor_experience: req.body.Doctor_experience,
    Doctor_speciality: req.body.Doctor_speciality,
    Profile_image: req.file ? req.file.filename : null,
    Alternate_contact: req.body.Alternate_contact,
    Whatsapp_no: req.body.Whatsapp_no,
    Address: req.body.Address,
    City: req.body.City,
    Country: req.body.Country,
    Region: req.body.Region,
    Updated_by: req.body.Updated_by || "Admin",
    status: "active",
    Approval_status: "Pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const data = await Doctor.create(fields);
    res.status(200).json({ message: "Doctor created successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update Doctor
const updateDoctorProfile = async (req, res) => {
  const fields = {
    Doctor_name: req.body.Doctor_name,
    Contact_no: req.body.Contact_no,
    Email_id: req.body.Email_id,
    Password: hashedPassword,
    Doctor_degree: req.body.Doctor_degree,
    Doctor_experience: req.body.Doctor_experience,
    Doctor_speciality: req.body.Doctor_speciality,
    Profile_image: req.file ? req.file.path : null,
    Alternate_contact: req.body.Alternate_contact,
    Whatsapp_no: req.body.Whatsapp_no,
    Address: req.body.Address,
    City: req.body.City,
    Country: req.body.Country,
    Region: req.body.Region,
    Updated_by: req.body.Updated_by || "Admin",
    updatedAt: new Date(),
  };
  try {
    const doctorId = req.params.id;

    const doctor = await Doctor.findByPk(doctorId);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    await doctor.update(fields);
    res
      .status(200)
      .json({ message: "Profile updated successfully", data: doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete Doctors
const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctorProfile = await Doctor.findOne({ where: { id } });

    if (doctorProfile?.Profile_image) {
      const profilePath = path.join(
        __dirname,
        "../../../client/public/upload",
        doctorProfile.Profile_image
      );
      if (fs.existsSync(profilePath)) {
        fs.unlinkSync(profilePath);
      }
    }

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
  updateDoctorProfile,
  deleteDoctor,
};
