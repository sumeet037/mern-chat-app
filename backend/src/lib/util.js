import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // Generate a token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Sending to the user as a cookie
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // JS can't access, prevent XSS attacks cross-site scripting attacks
    sameSite: true, //CSRF attacks cross-site requests forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
