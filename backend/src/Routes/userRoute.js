const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  allUsers,
} = require("../Controller/userController");
const authUser = require("../middleware/AuthUser.jsx");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all",authUser, allUsers);

module.exports = router;
