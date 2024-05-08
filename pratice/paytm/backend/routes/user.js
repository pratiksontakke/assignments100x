const express = require("express");
const { User, updateUserBody, UserZod, Bank } = require("../db");

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

router.post("/signIn", async (req, res) => {
    try {
        if (req.body.username && req.body.password) {
            let user = await User.findOne({
                username: req.body.username,
                password: req.body.password,
            });

            if (user) {
                let token = getJwtToken(req.body.username);
                res.status(200).json({
                    message: "Successfully sign in",
                    token: token,
                });
            } else {
                res.status(404).send({ message: "User not found" });
            }
        }
    } catch (err) {
        res.status(404).json({ message: "Invalid user data" });
    }
});

router.put("/", authMiddleware, async (req, res) => {
    try {
        let user = req.body;
        updateUserBody.safeParse(user);
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

router.post("/signup", validateUser, async (req, res) => {
    let user = req.body;
    try {
        let userSaved = await User(user).save();
        await Bank({
            userId: userSaved,
            balance: 1 + Math.random() * 10000,
        }).save();
        let token = getJwtToken(userSaved.username);
        res.status(200).json({
            message: "User created successfully",
            token: token,
        });
    } catch (err) {
        console.log(err);
        res.status(403).json({
            message: "Error while saving user",
            err: err,
        });
    }
});
module.exports = router;
