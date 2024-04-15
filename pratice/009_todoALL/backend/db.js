const mongoose = require("mongoose");

async function main() {
    await mongoose.connect(
        "mongodb+srv://pratik_01:DifSqcSzFRZWFp50@cluster1.xivzpxs.mongodb.net/todoApp"
    );
}

main()
    .then(() => console.log("connected to DB"))
    .catch((err) => console.log(err));

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
    Todo,
};
