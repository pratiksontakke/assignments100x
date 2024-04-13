const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let { username, password } = req.headers;
    let user = await User.findOne({
        username,
        password,
    });
    if (user) {
        next();
    } else {
        res.status(411).json({
            message: "Invalid admin credentials",
        });
    }
}

module.exports = userMiddleware;
