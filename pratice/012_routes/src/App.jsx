import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import PropDrilling from "./components/PropDrilling";
const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
function App() {
    return (
        <div>
            <PropDrilling />
            <br></br>
            <BrowserRouter>
                <Appbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={"loading..."}>
                                <Landing />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <Suspense fallback={"loading..."}>
                                <Dashboard />
                            </Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
