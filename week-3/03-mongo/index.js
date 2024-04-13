const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.use((error, req, res, next) => {
    console.log(error);
    res.json({
        message: "Bro we got error...!",
    });
    next();
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
