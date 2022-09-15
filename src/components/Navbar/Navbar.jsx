import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <a href="/">
                        <img src={images.Logo2} alt="logo" />
                    </a>
                </div>
                <ul className="app__navbar-links">
                    {[
                        "home",
                        "certificate",
                        "about",
                        "service",
                        "work",
                        "skills",
                        "contact",
                    ].map((item) => (
                        <li
                            className="app__links app__flex p-text"
                            key={`link-${item}`}
                        >
                            <div />
                            <a
                                href={
                                    item === "certificate"
                                        ? `${item}`
                                        : `/#${item}`
                                }
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="app__navbar-menu">
                    <HiMenu onClick={() => setToggle(true)} />

                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {[
                                    "home",
                                    "certificate",
                                    "about",
                                    "service",
                                    "work",
                                    "skills",
                                    "contact",
                                ].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={
												item === "certificate"
													? `${item}`
													: `/#${item}`
											}
                                            onClick={() => setToggle(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
