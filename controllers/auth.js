const bcrypt = require ('bcryptjs');
const User = require("../models/user");

exports.signUp = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password; if(!email || !password) {
  res.status(400).send({
  status: false,
  message: "All fields are required"
  })
  return;
  } res.json({
  message: "Welcome to my platform",
  email: email,
  });  
};

