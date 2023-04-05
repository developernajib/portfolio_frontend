import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const handleLinkClick = (link) => {
        if (link.startsWith("/#")) {
            const anchor = link.substring(2);
            setActiveLink(anchor);
        } else {
            setActiveLink(link);
        }
        setToggle(false);
    };

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
                        { to: "/#home", text: "home" },
                        { to: "/courses", text: "courses" },
                        { to: "/certificates", text: "certificates" },
                        { to: "/#about", text: "about" },
                        { to: "/#portfolio", text: "portfolio" },
                        { to: "/#skills", text: "skills" },
                        { to: "/#contact", text: "contact" },
                    ].map((item) => (
                        <li
                            className={`app__links app__flex p-text ${
                                item.to === "/" && activeLink === "home"
                                    ? "active"
                                    : ""
                            } ${
                                item.to.startsWith("/#") &&
                                activeLink === item.to.substring(2)
                                    ? "active"
                                    : ""
                            }`}
                            key={`link-${item.to}`}
                        >
                            <div />
                            <a
                                href={item.to}
                                onClick={() => handleLinkClick(item.to)}
                            >
                                {item.text}
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
                                    { to: "/", text: "home" },
                                    { to: "/courses", text: "courses" },
                                    {
                                        to: "/certificates",
                                        text: "certificates",
                                    },
                                    { to: "/#about", text: "about" },
                                    { to: "/#portfolio", text: "portfolio" },
                                    { to: "/#skills", text: "skills" },
                                    { to: "/#contact", text: "contact" },
                                ].map((item) => (
                                    <li key={item.to}>
                                        <a
                                            href={item.to}
                                            className={`${
                                                item.to.startsWith("/#") &&
                                                activeLink ===
                                                    item.to.substring(2)
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleLinkClick(item.to)
                                            }
                                        >
                                            {item.text}
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
