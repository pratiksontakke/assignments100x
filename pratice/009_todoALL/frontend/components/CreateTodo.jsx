import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <br />
            <br />
            <button
                onClick={() => {
                    postTodo(title, description);
                }}
            >
                Add a todo
            </button>
        </div>
    );
}

async function postTodo(title, description) {
    let jsonRes = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
            title,
            description,
        }),
        headers: {
            "content-type": "application/json",
        },
    });
    let res = await jsonRes.json();
    console.log(res);
}
