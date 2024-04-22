const express = require("express");
const { User, updateUserBody } = require("../db");

const { authMiddleware, validateUser, getJwtToken } = require("../middleware");
const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
    res.status(200).send("/user ...");
});

router.get("/bulk", authMiddleware, async (req, res) => {
    let name = req.query.filter || "";
    let users = await User.find({
        $or: [{ firstName: name }, { lastName: name }],
    });
    let resUsers = users.map((user) => {
        return {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        };
    });

    res.status(200).json({
        users: resUsers,
    });
});

router.post("/", validateUser, async (req, res) => {
    let user = await new User(req.body).save();
    if (user) {
        let token = getJwtToken(user.username);
        res.status(200).json({
            message: "User created successfully",
            token: token,
        });
    } else {
        res.status(404).send({ message: "User not saved" });
    }
});

router.put("/", authMiddleware, async (req, res) => {
    try {
        let user = req.body;
        updateUserBody.parse(user);
        user.username = req.username;
        await User.findOneAndUpdate({ username: user.username }, req.body, {
            new: true,
        });
        res.status(200).json({ message: "Updated successfully" });
    } catch (err) {
        res.status(403).json({
            message: "Error while updating information",
        });
    }
});

module.exports = router;
