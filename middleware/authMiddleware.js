import jwt from "jsonwebtoken";

const authenticationToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res
      .status(404)
      .json({ message: "Access denied. No token provided." });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(404).json({ message: "Invalid Token" });
  }
};
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Access denied. Admin privileges required." });
  }
  next();
};
export { authenticationToken, isAdmin };
