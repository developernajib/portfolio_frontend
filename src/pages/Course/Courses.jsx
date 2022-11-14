import React, { Fragment } from "react";
import { Navbar, Course, Footer } from "../../container";
const Courses = () => {
    return (
        <Fragment>
            <div className="app">
                <Navbar />
                <Course />
                <Footer />
            </div>
        </Fragment>
    );
};

export default Courses;
