const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../config");
// Admin Routes

router.post("/signup", async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    Admin.create({
        username,
        password,
    });
    res.json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
    // Implement admin signup logic
    let { username, password } = req.body;
    let admin = await Admin.findOne({
        username,
        password,
    });
    if (admin) {
        const token = jwt.sign({ username }, PRIVATE_KEY);
        res.json({ token });
    } else {
        res.status(411).json({
            message: "Invalid admin credentials",
        });
    }
});

router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let imageLink = req.body.imageLink;

    let result = await Course.create({
        title,
        description,
        price,
        imageLink,
    });

    res.json({
        message: "Course created successfully",
        courseId: result._id,
    });
});

router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let result = await Course.find();
    res.json({ courses: result });
});

module.exports = router;
