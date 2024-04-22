const express = require("express");
const userRoute = require("./user");
const router = express.Router();

router.use("/user", userRoute);

router.get("/", (req, res) => {
    res.status(200).send("/ working fine");
});

module.exports = router;
