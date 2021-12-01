const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const JWT_SECRET = "this is my app";
//Create a user using: POST "/api/auth/createUser". no login required

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if errors are there, return bad req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //checking whether user with this email exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry the email already exists" });
      }
      else{
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({authToken});
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error occurred");
    }
  }
);

module.exports = router;
