const express = require("express");
const bodyParser = require("body-parser");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.array(zod.number());

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    const response = schema.safeParse(kidneys);
    res.json({
        response,
    });
});

app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry something is up with our server",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
