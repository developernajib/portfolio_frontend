import React, { Fragment } from "react";
import "./App.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Certificates from "./pages/Certificate/Certificate";
import Courses from "./pages/Course/Courses";

function App() {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route
                        path="/certificates"
                        element={<Certificates />}
                    ></Route>
                    <Route path="/courses" element={<Courses />}></Route>
                </Routes>
            </Router>
        </Fragment>
    );
}

export default App;
