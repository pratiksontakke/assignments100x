const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.json({
            msg: "You send the wrong inputs",
        });
        return;
    }
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.json({
        msg: "Todo created.",
    });
});

app.get("/todos", async (req, res) => {
    const todos = await Todo.find({});
    res.json({
        todos,
    });
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.json({
            msg: "You send the wrong inputs",
        });
        return;
    }
    // update the db
    const updatedTodo = await Todo.findOneAndUpdate(
        { _id: updatePayload.id },
        { $set: { completed: true } },
        { new: true }
    );
    res.json({
        todo: updatedTodo,
    });
});

app.use((error, req, res, next) => {
    console.log(error);
    res.json({
        msg: "Bro we got some error...",
    });
});

app.listen(3000, () => {
    console.log(`App listening on port 3000`);
});
