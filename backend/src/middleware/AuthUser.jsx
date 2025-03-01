const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: "No token provided. Access denied!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // req.user me userId aa jayega
        next(); // Agle middleware/controller ko call karne ke liye
    } catch (error) {
        console.error("Auth Middleware Error: ", error.message);
        res.status(401).json({ message: "Invalid or expired token. Please login again!" });
    }
};

module.exports = authUser;
