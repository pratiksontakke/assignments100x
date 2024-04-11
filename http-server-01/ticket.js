const express = require("express");
const app = express();

function isOldEnough(req, res, next) {
    const age = req.query.age;

    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "You are too young for this ride...!",
        });
    }
}

app.use(isOldEnough);

app.get("/ride1", (req, res) => {
    res.json({
        msg: "You have succesfully riden the ride 1",
    });
});

app.get("/ride2", (req, res) => {
    res.json({
        msg: "You have succesfully riden the ride 2",
    });
});

app.listen(3000);
