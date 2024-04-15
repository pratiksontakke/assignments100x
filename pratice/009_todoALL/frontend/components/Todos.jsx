import { useEffect, useState } from "react";

export function Todos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos(setTodos);
    }, []);
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div key={todo._id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>
                            {todo.completed == true
                                ? "Completed"
                                : "Mark as completed"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

async function getTodos(setTodos) {
    let jsonRes = await fetch("http://localhost:3000/todos");
    let res = await jsonRes.json();
    setTodos(res.todos);
}
