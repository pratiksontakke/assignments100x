const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;
    User.create({
        username,
        password,
    });
    res.json({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
    // Implement admin signup logic
    let { username, password } = req.body;
    let user = await User.findOne({
        username,
        password,
    });
    if (user) {
        const token = jwt.sign({ username }, PRIVATE_KEY);
        res.json({ token });
    } else {
        res.status(411).json({
            message: "Invalid user credentials",
        });
    }
});

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    let result = await Course.find();
    res.json({ courses: result });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    let username = req.username;

    let courseId = req.params.courseId;
    let course = await Course.findById(courseId);
    let user = await User.findOne({
        username,
    })
        .populate("courses")
        .exec();

    if (course && user) {
        user.courses.push(course);
        user.save();
    }

    res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let username = req.username;
    let user = await User.findOne({
        username,
    })
        .populate("courses")
        .exec();
    res.status(200).json({
        courses: user.courses ? user.courses : "course is empty",
    });
});

module.exports = router;

module.exports = router;
