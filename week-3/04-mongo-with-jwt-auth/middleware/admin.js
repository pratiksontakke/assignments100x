const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
        const token = authorizationHeader.split(" ")[1];
        const decoded = jwt.verify(token, PRIVATE_KEY);
        if (decoded.username) {
            next();
        } else {
            res.status(411).json({
                message: "Invalid admin credentials",
            });
        }
    } else {
        res.status(411).json({
            message: "Invalid user credentials",
        });
    }
}

module.exports = adminMiddleware;
