const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username = req.headers["username"];
    let password = req.headers["password"];
    let admin = await Admin.findOne({
        username,
        password,
    });
    if (admin) {
        next();
    } else {
        res.status(411).json({
            message: "Invalid admin credentials",
        });
    }
}

module.exports = adminMiddleware;
