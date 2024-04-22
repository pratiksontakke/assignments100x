const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

const app = express();
const PORT = 3000;
/* const token = jwt.sign({ username}, JWT_SECRET, {
    algorithm: "RS256",
});
 */
// var decoded = jwt.verify(token, JWT_SECRET);

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
