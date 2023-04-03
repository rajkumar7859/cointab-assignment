const express = require("express");
const router = express.Router();
const { LoginUser, registerUser, LogoutUser } = require("../Controller/userController");
const blockUserMiddleware = require("../Meddleware/loginMeddleware")

router.post("/login", blockUserMiddleware, LoginUser);
router.post("/register", registerUser);

module.exports = router;