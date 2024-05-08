const express = require("express");
const userRoute = require("./user");
const accountRoute = require("./account");
const router = express.Router();

router.use("/user", userRoute);

router.use("/account", accountRoute);

router.get("/", (req, res) => {
    res.status(200).send("/ working fine");
});

module.exports = router;
