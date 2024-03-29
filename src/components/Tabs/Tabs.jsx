import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./Tabs.css";

const Tabs = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]';
        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);
    return (
        <div>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                title={skill.name}
                                className="app__flex cursor-pointer"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img
                                    src={urlFor(skill.icon)}
                                    alt={skill.name}
                                />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Tabs;
