const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");
const { UserZod, User } = require("./db");

function authMiddleware(req, res, next) {
    let authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res
            .status(403)
            .json({ message: "Invalid header authorization (Bearer)." });
    }
    let token = authHeader.split(" ")[1];
    try {
        var decoded = jwt.verify(token, JWT_SECRET);
        if (decoded && decoded.username) {
            req.username = decoded.username;
            next();
        } else {
            throw new Error("Auth failed");
        }
    } catch (err) {
        res.status(403).json({
            message: err,
        });
    }
}

async function validateUser(req, res, next) {
    try {
        UserZod.parse(req.body);
        if (req.body.username) {
            let user = await User.findOne({ username: req.body.username });
            if (user) {
                res.status(411).json({
                    message: "Email already taken / Incorrect inputs",
                });
            } else {
                next();
            }
        }
    } catch (err) {
        res.status(404).json({ message: "Invalid user data" });
    }
}
const getJwtToken = (username) => {
    return jwt.sign({ username }, JWT_SECRET);
};

module.exports = { authMiddleware, validateUser, getJwtToken };
