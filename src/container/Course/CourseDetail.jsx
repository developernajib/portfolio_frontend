import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { urlFor, client } from "../../client";
import { fileUrl } from "@sanity/client";
import { motion } from "framer-motion";
import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";
import { images } from "../../constants";
import "./Course.css";

const CourseDetail = () => {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [error, setError] = useState(false);
    const [pdfUrl, setPdfUrl] = useState("");

    useEffect(() => {
        const query = `*[_type == "courses" && slug == "${slug}"][0]`;

        client
            .fetch(query)
            .then((data) => {
                if (data) {
                    setCourse(data);
                    if (data.coursemodule && data.coursemodule.asset) {
                        const fileRef = data.coursemodule.asset._ref;
                        const fileQuery = `*[_id == "${fileRef}"][0]`;
                        client
                            .fetch(fileQuery)
                            .then((fileData) => {
                                if (fileData && fileData.url) {
                                    setPdfUrl(fileData.url);
                                }
                            })
                            .catch((error) => {
                                console.error(
                                    "Error fetching PDF file:",
                                    error
                                );
                                setError(true);
                            });
                    }
                } else {
                    setError(true);
                }
            })
            .catch((error) => {
                console.error("Error fetching course:", error);
                setError(true);
            });
    }, [slug]);

    if (error) {
        return (
            <div className="container d-flex align-items-center">
                Error occurred while fetching the course details.
            </div>
        );
    }

    if (!course) {
        return (
            <div
                className="container d-flex align-items-center"
                style={{ minHeight: "70vh" }}
            >
                <LoaderSVG />
            </div>
        );
    }

    return (
        <Fragment>
            <section className="course-details" style={{ minHeight: "40vh" }}>
                <h1 className="head-text" style={{ fontSize: "2rem" }}>
                    {course.title}
                </h1>
                <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="app__work-portfolio"
                >
                    <div className="course-detail">
                        <div
                            className="row"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div className="col-lg-6">
                                <div>
                                    <div className="course-detail-img">
                                        <img
                                            src={urlFor(course.imgUrl)}
                                            alt="course banner"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="course-title">
                                            {course.title}
                                        </h4>
                                        {course.discountprice ? (
                                            <div className="text-start w-100p mt-3 d-flex justify-content-between align-items-center">
                                                <div className="course-price mb-2">
                                                    <p
                                                        className="mb-2 c-secondary-color"
                                                        style={{
                                                            fontSize: "1.25rem",
                                                        }}
                                                    >
                                                        Discount Price:{" "}
                                                        <b>
                                                            {
                                                                course.discountprice
                                                            }{" "}
                                                            Taka
                                                        </b>
                                                    </p>
                                                    <p
                                                        style={{
                                                            fontSize: "1.25rem",
                                                        }}
                                                    >
                                                        Real Price:{" "}
                                                        <strike
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {course.price} Taka
                                                        </strike>
                                                    </p>
                                                </div>
                                                <div className="course-discount">
                                                    <h3 className="course-discount-p">
                                                        {Math.round(
                                                            ((course.price -
                                                                course.discountprice) /
                                                                course.price) *
                                                                100
                                                        )}
                                                        % Discount
                                                    </h3>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-start w-100p mt-3">
                                                <div className="course-price mb-2">
                                                    <p
                                                        className="c-secondary-color"
                                                        style={{
                                                            fontSize: "1.5rem",
                                                        }}
                                                    >
                                                        Discount Price:{" "}
                                                        <b>
                                                            {course.price === 0
                                                                ? "Free"
                                                                : `${course.price} Taka`}
                                                        </b>
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="my-2">
                                            <p>
                                                Enrolled Student:{" "}
                                                <span
                                                    style={{
                                                        color: "var(--secondary-color)",
                                                    }}
                                                >
                                                    {course.enroll ? course.enroll : 0}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="course-card-registration text-start w-100p mt-4">
                                            <a
                                                href={
                                                    course.status == 1
                                                        ? course.registration
                                                        : "/"
                                                }
                                                className={` ${
                                                    course.status == 0
                                                        ? "disabled"
                                                        : ""
                                                }`}
                                            >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                {course.status == 0
                                                    ? "Registration off for now"
                                                    : "Register Now"}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="course-prerequisite">
                                    <h4 className="mb-2">
                                        Course Prerequisite:-
                                    </h4>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: course.prerequisite
                                                ?.prerequisite,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="course-description mt-2 mb-5">
                            <h4 className="mb-2">Description:-</h4>
                            <p>{course.description}</p>
                        </div>
                        <div className="course-prerequisite-2">
                            <h4 className="mb-2">Course Prerequisite:-</h4>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: course.prerequisite?.prerequisite,
                                }}
                            ></div>
                        </div>
                        {course.type == "Course" ? (
                            <div>
                                <div className="course-module">
                                    <h3 className="mb-2">Course Module:-</h3>
                                    {pdfUrl ? (
                                        <iframe
                                            src={pdfUrl}
                                            title="PDF Viewer"
                                            className="pdf-preview"
                                            style={{
                                                width: "100%",
                                                minHeight: "85vh",
                                                height: "75vh",
                                            }}
                                        ></iframe>
                                    ) : (
                                        <p>
                                            It appears you don't have a PDF
                                            plugin for this browser. You can{" "}
                                            <a href={pdfUrl}>
                                                download the PDF file
                                            </a>
                                            .
                                        </p>
                                    )}
                                </div>
                            </div>
                        ) : null}
                        <div className="mt-5">
                            <h3>Course Author:-</h3>
                            <div>
                                {course.authorProfile && course.authorName ? (
                                    <div className="author">
                                        <div className="author-profile">
                                            <a href={course.link}>
                                                <img
                                                    src={course.authorProfile}
                                                    alt="author_profile"
                                                />
                                            </a>
                                        </div>
                                        <div className="author-data">
                                            <h3>
                                                <a
                                                    style={{
                                                        color: "#000",
                                                        textDecoration: "none",
                                                    }}
                                                    href={course.link}
                                                >
                                                    {course.authorName}
                                                </a>
                                            </h3>
                                            <p>
                                                {course.authorTitle
                                                    ? course.authorTitle
                                                    : "Cyber Security Expert, Web & Blockchain Developer"}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="author">
                                        <div className="author-profile">
                                            <img
                                                src={images.AuthorProfile}
                                                alt="author_profile"
                                            />
                                        </div>
                                        <div className="author-data">
                                            <h3>Md. Najib Islam</h3>
                                            <p>
                                                Cyber Security Expert, Web &
                                                Blockchain Developer
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </Fragment>
    );
};

export default CourseDetail;
