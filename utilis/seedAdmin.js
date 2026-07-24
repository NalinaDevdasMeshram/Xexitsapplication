import userModel from "../models/User.js";

const seedAdmin = async () => {
  try {
    const adminExists = await userModel.findOne({ username: "Admin" });
    if (adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash("admin", salt);
      const admin = new User({
        username: "admin",
        password: hashedpassword,
        role: admin,
      });
      await admin.save();
      console.log("Admin user seeded successfully");
    }
  } catch (error) {
    console.error("Admin seed error:", error.message);
  }
};
export default seedAdmin;
