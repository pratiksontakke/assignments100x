import React, { useState } from "react";

function Render() {
    const [title, setTitle] = useState("harkirat1");

    return (
        <div>
            <button
                onClick={() => {
                    setTitle(Math.random() * 100);
                }}
            >
                Click me to change the title
            </button>
            <Header title={title} />
            <Header title="harkirat2" />
            <Header title="harkirat2" />
            <Header title="harkirat2" />
            <Header title="harkirat2" />
            <Header title="harkirat2" />
        </div>
    );
}

const Header = React.memo(function Header({ title }) {
    return <div>My name is {title}</div>;
});

export default Render;
