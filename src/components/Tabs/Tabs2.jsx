import React from "react";
import "./Tabs2.css";

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
                            <span>Security</span>
                        </div>
                    </div>
                    <div class="skill-orbit">
                        <div class="skill-planet">
                            <span>VueJS</span>
                        </div>
                    </div>
                    <div class="skill-orbit">
                        <div class="skill-planet">
                            <span>Soft  </span>
                        </div>
                    </div>
                    <div class="skill-orbit">
                        <div class="skill-planet">
                            <span>Web</span>
                        </div>
                    </div>
                </div>
                <div class="skills-top-circle panel" title="Sun"></div>
            </div>
        </>
    );
};

export default Tabs2;
