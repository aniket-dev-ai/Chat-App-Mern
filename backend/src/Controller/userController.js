const User = require("../Modals/UserModel"); // Path adjust kar lena
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;

    // Basic validation - Sabse pehle inputs check
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Existing user check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // New user creation
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      pic,
    });

    // Save to database
    const savedUser = await newUser.save();

    // JWT token generation
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        pic: savedUser.pic,
      },
      token,
    });
  } catch (error) {
    console.error("Registration Error: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
      },
      token,
    });
  } catch (error) {
    console.error("Login Error: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password"); // Don't expose password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User profile fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Get Profile Error: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.editUserProfile = async (req, res) => {
  try {
    const { name, email, pic } = req.body;

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (pic) user.pic = pic;

    const updatedUser = await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        pic: updatedUser.pic,
      },
    });
  } catch (error) {
    console.error("Edit Profile Error: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.logoutUser = (req, res) => {
  try {
    // Frontend se token remove karna hoga (localStorage/cookies se), backend sirf confirmation dega
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout Error: ", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.allUsers = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          $or: [
            { name: { $regex: req.query.keyword, $options: "i" } },
            { email: { $regex: req.query.keyword, $options: "i" } },
          ],
        }
      : {}; // If no keyword, search condition will be empty

    // Find users except current logged-in user
    const users = await User.find({
      ...keyword,
      _id: { $ne: req.user.userId }, // Exclude logged-in user
    }).select("-password");

    res.status(200).json({
      message: "All users fetched successfully",
      users,
    });
  } catch (error) {
    console.error("All Users Error: ", error.message);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
