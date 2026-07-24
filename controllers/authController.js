import jwt from "jsonwebtoken";
import userModel from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "username already present.." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new userModel({
      username: username,
      // email: email,
      // country: country,
      password: hashedPassword,
      role: "employee",
    });
    await user.save();
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        // email: user.email,
        // country: user.country,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );
    const isAdmin = user.role === "admin";
    res.status(200).json({
      message: "user registered successfully.",
      token: token,
      is_admin: isAdmin,
      username: username,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Server error during registration..",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid username or password.." });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Invalid username or password.." });
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );
    const isAdmin = user.role === "admin";
    res.status(200).json({ token, is_admin: isAdmin, username });
  } catch (error) {
    res.status(500).json({ message: "server error during login.." });
  }
};

export const verifyUser = async (req, res) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ valid: false, message: "No token provided" });
  }
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const isAdmin = verified.role === "admin";
    res.json({
      valid: true,
      userId: verified.id,
      is_admin: isAdmin,
      username: verified.username,
    });
  } catch (error) {
    res.status(404).json({ message: "server error during login.." });
  }
};
