import { useState } from "react";

import "./App.css";

function App() {
    const [todos, setTodos] = useState([
        {
            title: "Go to gym",
            description: "Go to gym from 7 to 9",
            completed: "false",
        },
        {
            title: "Study DSA",
            description: "Study DSA 5 to 7",
            completed: "true",
        },
    ]);
    function addnewtoDo() {
        setTodos([
            ...todos,
            {
                title: "Study WEB",
                description: "Study WEB 8 to 7",
                completed: "true",
            },
        ]);
    }
    return (
        <div>
            <button onClick={addnewtoDo}>Add new todo</button>
            {todos.map((todo) => {
                return (
                    <Todo
                        title={todo.title}
                        description={todo.description}
                        completed={todo.completed}
                    ></Todo>
                );
            })}
        </div>
    );
}

function Todo(props) {
    return (
        <div>
            <h1>Title : {props.title}</h1>
            <h1>Description : {props.description}</h1>
            <h1>Completed : {props.completed}</h1>
        </div>
    );
}

// function CustomButton(props) {
//     function onClickHandler() {
//         props.setCount(props.count + 1);
//     }
//     return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }
export default App;
