const User = require("../modal/userModal");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const blockedUsers = 0; // initialize an empty object to keep track of blocked users

exports.registerUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User is already existing" });
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = new User({
        email,
        name,
        password:hashedPassword,
      });
      await user.save();
      res.status(200).json({ message: "User registered successfully", user: user });
    }
  } catch (error) {
    res.status(500).json({ message: "Register error" });
  }
};


exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found. please create account' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      user.loginAttempts++;
      if (user.loginAttempts >= 5) {
        user.lockedUntil = new Date(Date.now() + 24 * 60 * 60 * 1000); // lock the account for 24 hours
        await user.save();
        return res.status(403).json({message:'To many invalid attempt . Place try again after 24 hours'});
      }
      await user.save();
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    user.loginAttempts = 0;
    user.lockedUntil = null;
    await user.save();

    const token = jwt.sign({ userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Login error' });
  }
};

exports.LogoutUser = async (req, res) => {
  try {
    // Send empty token in response to logout user
    res.status(200).json({ token: "" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Logout error" });
  }
};