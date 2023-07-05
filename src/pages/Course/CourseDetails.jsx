import React, { Fragment } from "react";
import { Navbar, CourseDetail, Footer } from "../../container";
const Courses = () => {
    return (
        <Fragment>
            <div className="app">
                <Navbar />
                <CourseDetail />
                <Footer />
            </div>
        </Fragment>
    );
};

export default Courses;
