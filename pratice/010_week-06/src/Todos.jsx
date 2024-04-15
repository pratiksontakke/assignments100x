import { useState } from "react";

let counter = 0;
function Todos() {
    const [todos, setTodos] = useState([
        {
            id: counter++,
            title: "Go to gym",
            description: "Universe gym 7 to 9",
            isCompleted: false,
        },
        {
            id: counter++,
            title: "play cricket",
            description: "Universe ground 9 to 10",
            isCompleted: true,
        },
        {
            id: counter++,
            title: "Go to swimming",
            description: "Universe gym 10 to 12",
            isCompleted: false,
        },
    ]);
    return (
        <div>
            <button
                onClick={() => {
                    addTodo(todos, setTodos);
                }}
            >
                Add todo
            </button>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                        isCompleted={todo.isCompleted}
                    ></Todo>
                );
            })}
        </div>
    );
}

function Todo(props) {
    return (
        <div key={props.id}>
            <h3>{props.title}</h3>
            <h3>{props.description}</h3>
            <button>
                {props.isCompleted ? "Completed" : "Mark as complete"}
            </button>
        </div>
    );
}

function addTodo(todos, setTodos) {
    setTodos([
        ...todos,
        {
            id: counter++,
            title: "Go to archary",
            description: "Universe archary 16 to 12",
            isCompleted: false,
        },
    ]);
    console.log(todos);
}

export default Todos;
