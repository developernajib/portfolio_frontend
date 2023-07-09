import React, { useState, useEffect, Fragment } from "react";
import { images } from "../../constants";

import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";
import "./Course.css";

const Course = () => {
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [error, setError] = useState(false);

    useEffect(() => {
        const query = '*[_type == "courses"]';

        client
            .fetch(query)
            .then((data) => {
                if (data != null) {
                    setWorks(data);
                    // const upcomingCourses = data.filter(
                    //     (work) =>
                    //         work.tags && work.tags.includes("Upcoming Courses")
                    // );
                    // if (upcomingCourses.length > 0) {
                    //     setFilterWork(
                    //         data.filter(
                    //             (work) =>
                    //                 !work.tags ||
                    //                 !work.tags.includes("Upcoming Courses")
                    //         )
                    //     );
                    // } else {
                    setFilterWork(data);
                    // }
                } else {
                    setError(true);
                }
            })
            .catch((error) => {
                setError(true);
            });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
            setFilterWork(works.filter((work) => work.tags.includes(item)));
        }, 500);
    };

    if (error) {
        return (
            <div
                className="container d-flex align-items-center"
                style={{ minHeight: "65vh", padding: "0.15rem 3rem" }}
            >
                Error occurred while fetching the course data. Please Refresh
                the page
            </div>
        );
    }

    if (works == 0) {
        return (
            <div
                className="container d-flex align-items-center"
                style={{ minHeight: "65vh", padding: "0.15rem 3rem" }}
            >
                <LoaderSVG />
            </div>
        );
    }

    return (
        <Fragment>
            <section className="courses">
                <h1 className="head-text">Courses</h1>
                <div className="app__work-filter make-center">
                    {[
                        "All",
                        "Blockchain",
                        "Blackhat Hacking",
                        "Blackhat Tools",
                        "Upcoming Courses",
                    ].map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleWorkFilter(item)}
                            className={`app__work-filter-item app__flex p-text ${
                                activeFilter === item ? "item-active" : ""
                            }`}
                            style={
                                item === "Blackhat Tools"
                                    ? { color: "red" }
                                    : null
                            }
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {!error && (
                    <motion.div
                        animate={animateCard}
                        transition={{ duration: 0.5, delayChildren: 0.5 }}
                        className="app__work-portfolio .app__work-course"
                    >
                        {filterWork.length > 0 ? (
                            filterWork
                                .slice()
                                .sort(
                                    (a, b) =>
                                        parseInt(b.index) - parseInt(a.index)
                                )
                                .map((work, index) => (
                                    <div style={{ position: 'relative' }}>
                                        <div
                                            className={`app__work-item app__flex app__work-item__size ${
                                                work.status == 0
                                                    ? "disabled app_course-disabled"
                                                    : ""
                                            }`}
                                            key={index}
                                            style={{
                                                width: "350px",
                                                height: "500px",
                                            }}
                                        >
                                            <div className="app__work-img app__work-course app__flex">
                                                <a
                                                    href={`/course/${work.slug}`}
                                                    type="button"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src={urlFor(
                                                            work.imgUrl
                                                        )}
                                                        alt={work.name}
                                                        className={
                                                            work.discountprice
                                                                ? "course-card-extra-margin"
                                                                : ""
                                                        }
                                                    />

                                                    <motion.div
                                                        whileInView={{
                                                            scale: [0, 1],
                                                        }}
                                                        whileHover={{
                                                            scale: [1, 0.9],
                                                        }}
                                                        transition={{
                                                            duration: 0.25,
                                                        }}
                                                        className="app__flex"
                                                    ></motion.div>
                                                </a>
                                            </div>

                                            <div className="app__work-content app__flex">
                                                <h3
                                                    className="mt-1 mb-2"
                                                    style={{ fontSize: "21px" }}
                                                >
                                                    {work.title}
                                                </h3>
                                                {work.discountprice ? (
                                                    <div className="text-start w-100p mt-2 d-flex justify-content-between align-items-center">
                                                        <div className="course-price">
                                                            <p className="mb-2 c-secondary-color">
                                                                Discount Price:{" "}
                                                                <b>
                                                                    {
                                                                        work.discountprice
                                                                    }{" "}
                                                                    Taka
                                                                </b>
                                                            </p>
                                                            <p
                                                                className={
                                                                    !work.authorName
                                                                        ? "mb-3"
                                                                        : null
                                                                }
                                                            >
                                                                Price:{" "}
                                                                <strike
                                                                    style={{
                                                                        color: "red",
                                                                    }}
                                                                >
                                                                    {work.price}{" "}
                                                                    Taka
                                                                </strike>
                                                            </p>
                                                        </div>
                                                        <div className="course-discount">
                                                            <h3
                                                                style={{
                                                                    color: "#15803d",
                                                                }}
                                                            >
                                                                {Math.round(
                                                                    ((work.price -
                                                                        work.discountprice) /
                                                                        work.price) *
                                                                        100
                                                                )}
                                                                % Discount
                                                            </h3>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-start w-100p mt-3">
                                                        <div className="course-price">
                                                            <p className="mb-2 c-secondary-color">
                                                                Discount Price:{" "}
                                                                <b>
                                                                    {work.price ===
                                                                    0
                                                                        ? "Free"
                                                                        : `${work.price} Taka`}
                                                                </b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {work.authorName ? (
                                                    <div className="text-start w-100p">
                                                        <p className="mt-3">
                                                            Instructor:{" "}
                                                            {work.authorName}
                                                        </p>
                                                    </div>
                                                ) : null}
                                                {work.enroll ? (
                                                    <div className="text-start w-100p mb-3">
                                                        <p
                                                            className={
                                                                work.authorName
                                                                    ? "mt-2"
                                                                    : "my-3"
                                                            }
                                                        >
                                                            Enrolled Student:{" "}
                                                            <span
                                                                style={{
                                                                    color: "var(--secondary-color)",
                                                                    fontWeight:
                                                                        "600",
                                                                }}
                                                            >
                                                                {work.enroll}
                                                            </span>
                                                        </p>
                                                    </div>
                                                ) : null}

                                                <div className="course-card-registration text-start w-100p mt-2">
                                                    <a href={work.registration}>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        {work.status == 0
                                                            ? "Registration off for now"
                                                            : "Register Now"}
                                                    </a>
                                                </div>

                                                <div className="app__work-tag app__flex">
                                                    <p className="p-text">
                                                        {!work.type
                                                            ? work.level
                                                            : work.type}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <div className="mt-4">
                                <img
                                    src={images.CourseNotFound}
                                    alt="Course_Not_Found"
                                    width={250}
                                />
                            </div>
                        )}
                    </motion.div>
                )}
            </section>
        </Fragment>
    );
};

export default Course;
