const { doctors } = require("../database/models");
const bcrypt = require("bcryptjs");

// login
const loginDoctor = async (req, res) => {
  try {
    const { Email_id, Password } = req.body;

    // Correct query to find the user
    const user = await doctors.findOne({ where: { Email_id } });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);

    // if (!isMatch) {
    //   return res.status(401).json({ message: "Invalid password" });
    // }

    console.log(user.id);

    res.status(200).json({ message: "Login successful", doctorId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { loginDoctor };
