import React from "react";
import "./Tabs2.scss";

const Tabs2 = () => {
    return (
        <>
            <div
                class="skills-circle-wrap make-center"
                title="Made By Pure CSS"
            >
                <div className="heading text-center "></div>
                <div class="skills-circle">
                    <div class="skill-orbit">
                        <div class="skill-planet">
                            <span>Blockchain</span>
                        </div>
                    </div>
                    <div class="skill-orbit">
                        <div class="skill-planet">
                            <span>React</span>
                        </div>
                    </div>
                    <div class="skill-orbit">
                        <div class="skill-planet">
                            <span>JS</span>
                        </div>
                    </div>
                    <div class="skill-orbit">
                        <div class="skill-planet">
                            <span>CSS</span>
                        </div>
                    </div>
                    <div class="skill-orbit">
                        <div class="skill-planet">
                            <span>HTML</span>
                        </div>
                    </div>
                </div>
                <div class="skills-top-circle panel" title="Sun"></div>
            </div>
        </>
    );
};

export default Tabs2;
