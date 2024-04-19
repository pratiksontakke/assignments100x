import React, { useState } from "react";
import "./App.css";
import Render from "./Render";
import Todos from "./Todos";
import CardWrapperOuter from "./CardWrapperOuter";
import Memo from "./Memo";

function App() {
    return (
        <div>
            {/* <Render /> */}
            {/* <Todos /> */}
            {/* <CardWrapperOuter /> */}
            <Memo />
        </div>
    );
}

const Header = React.memo(function Header({ title }) {
    return <div>My name is {title}</div>;
});

export default App;
