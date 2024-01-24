const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

// Function to generate a token
const generateToken = (userId) => {
  const secretKey = process.env.JWT_SECRET; // Replace with your secret key

  const payload = {
    userId,
  };

  const options = {
    expiresIn: "1d", // Token expires in 1 day
  };
  return jwt.sign(payload, secretKey, options);
};

// Save the token to the database
const saveTokenToDatabase = async (userId) => {
  const token = generateToken(userId);

  try {
    await Token.create({
      userId,
      token,
    });
  } catch (error) {
    console.error("Error saving token to the database:", error);
  }
};
