const { hospitals } = require("../database/models/index");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

// getting hospitala data
const getHospitals = async (req, res) => {
  try {
    const data = await hospitals.findAll();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// create hospital

const createHospital = async (req, res) => {
  const hashedpassword = await bcrypt.hash(req.body.H_password, 10);
  console.log(req.body);
  console.log(req.file);

  const fileds = {
    H_image: req.file ? req.file.filename : null,
    H_name: req.body.H_name,
    H_category: req.body.H_category,
    H_short_add: req.body.H_short_add,
    H_full_add: req.body.H_full_add,
    H_contact_no: req.body.H_contact_no,
    H_advance_Appointment: req.body.H_advance_Appointment || false,
    H_Todays_Appointment: req.body.H_advance_Appointment || true,
    H_email_id: req.body.H_email_id,
    H_password: hashedpassword,
    Amenities: req.body.Amenities,
    Description: req.body.Description,
    status: req.body.status || "active",
    Approval_status: req.body.Approval_status || "approved",
    Created_by: req.body.Created_by || "Hospital",
    Approved_by: req.body.Approved_by || "Admin",
  };

  try {
    const data = await hospitals.create(fileds);
    res.status(200).json({ message: "Doctor created successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update hospital

const updateHospital = async (req, res) => {
  const { id } = req.params;

  // image guard
  let newImage;
  if (req.file && req.file.filename) {
    newImage = req.file.filename;
  } else {
    newImage = req.body.H_image || null;
  }

  // hashing password
  const hashedpassword = await bcrypt.hash(req.body.H_password, 10);

  const fileds = {
    H_image: newImage,
    H_name: req.body.H_name,
    H_category: req.body.H_category,
    H_short_add: req.body.H_short_add,
    H_full_add: req.body.H_full_add,
    H_contact_no: req.body.H_contact_no,
    H_advance_Appointment: req.body.H_advance_Appointment || false,
    H_Todays_Appointment: req.body.H_advance_Appointment || true,
    H_email_id: req.body.H_email_id,
    H_password: hashedpassword,
    Amenities: req.body.Amenities,
    Description: req.body.Description,
    status: req.body.status || "active",
    Approval_status: req.body.Approval_status || "approved",
    Updated_by: req.body.Updated_by || "Hospital",
    Approved_by: req.body.Approved_by || "Admin",
  };
  try {
    const hospital = await hospitals.findOne({ where: { id } });

    if (!hospital) {
      return res.status(404).json({ message: "hospital not found" });
    }

    if (req.file) {
      const oldImage = hospital.H_image;
      if (oldImage) {
        const oldImagePath = path.join(
          __dirname,
          "../../../client/public/upload",
          oldImage
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    await hospital.update(fileds);
    res
      .status(200)
      .json({ message: "hospital updated successfully", data: hospital });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete hospital

const removeHospital = async (req, res) => {
  const { id } = req.params;
  try {
    const hospitalimage = await hospitals.findOne({ where: { id } });
    if (hospitalimage?.H_image) {
      const imgPath = path.join(
        __dirname,
        "../../../client/public/upload",
        hospitalimage.H_image
      );
      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }
    }

    const data = await hospitals.destroy({ where: { id: id } });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getHospitals,
  createHospital,
  updateHospital,
  removeHospital,
};
