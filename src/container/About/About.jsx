import React, { Fragment, useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  const [dataSection, setDataSection] = useState(0);
  const DataSection = (index) => {
    setDataSection(index);
  };
  return (
    <Fragment>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <section className="about-me">
          <h2 className="head-text mb-3">About Me</h2>
          <div className={dataSection !== 2 ? "card" : "card is-active"}>
            <div className="card-header">
              <div className="card-cover"></div>
              <img className="card-avatar" src={images.profile} alt="avatar" />
              <h1 className="card-fullname">Md. Najib Islam</h1>
              <h2 className="card-jobtitle">Developer & Programmer</h2>
            </div>
            <div className="card-main">
              <div
                className={
                  dataSection === 0 ? "card-section is-active" : "card-section"
                }
              >
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    I am a web & blockchain developer and programmer. I have
                    been working as a web developer for more than 2 years &
                    working with blockchain since 2021. I have good knowledge in
                    MERN stack, PHP, Laravel, MySQL, API, DevOps, Docker and so
                    on.
                  </p>
                  <button className="contact-me">
                    <a href="https://drive.google.com/file/d/1VN57Awcs-6peapIi62xxsehZrEsANyxR/view?usp=sharing">
                      Check out my CV
                    </a>
                  </button>
                </div>
              </div>

              <div
                className={
                  dataSection === 1 ? "card-section is-active" : "card-section"
                }
              >
                <div className="card-content">
                  <div className="card-subtitle">ABOUT</div>
                  <p className="card-desc">
                    I am a web developer and programmer. I have been working as
                    a web developer for more than 2 years. I have good knowledge
                    in HTML, CSS, Bootstrap, JavaScript, React, Node.js,
                    Express.js, MongoDB, DevOps, Docker and so on.
                  </p>
                  <button className="contact-me">
                    <a href="https://drive.google.com/file/d/1VN57Awcs-6peapIi62xxsehZrEsANyxR/view?usp=sharing">
                      Check out my CV
                    </a>
                  </button>
                </div>
              </div>
              <div
                className={
                  dataSection === 2 ? "card-section is-active" : "card-section"
                }
              >
                <div className="card-content">
                  <div className="card-timeline">
                    <div className="card-item" data-year="2017">
                      <div className="card-item-title">
                        I first start learning at <span>2017</span>
                      </div>
                      <div className="card-item-desc">
                        I started learning from scratch of computer.
                      </div>
                    </div>
                    <div className="card-item" data-year="2020">
                      <div className="card-item-title">
                        Data Entry at <span>Global Soft</span>
                      </div>
                      <div className="card-item-desc">
                        I did data entry at global soft since 2020-2021.
                      </div>
                    </div>
                    <div className="card-item" data-year="2021">
                      <div className="card-item-title">
                        Blockchain Development at <span>PBI</span>
                      </div>
                      <div className="card-item-desc">
                        I have learned blockchain development from Pakistan
                        Blockchain Institute at 2021.
                      </div>
                    </div>
                    <div className="card-item" data-year="2022">
                      <div className="card-item-title">
                        Blockchain Instructor at <span>Byte Capsule Ltd</span>
                      </div>
                      <div className="card-item-desc">
                        I joined Byte Capsule Ltd in Oct 2022 as an Instructor.
                      </div>
                    </div>
                    <div className="card-item" data-year="2022">
                      <div className="card-item-title">
                        Full Stack Developer at <span>Rexo IT</span>
                      </div>
                      <div className="card-item-desc">
                        I start my full stack development journey in Nov 2022.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  dataSection === 3 ? "card-section is-active" : "card-section"
                }
              >
                <div className="card-content">
                  <div className="card-subtitle">CONTACT</div>
                  <div className="card-contact-wrapper">
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Halishahar, Bandar, Chittagong
                    </div>
                    <div className="card-contact">
                      <i className="fa-solid fa-phone"></i>
                      (+88) 01537500950
                    </div>
                    <div className="card-contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      developernajib@gmail.com / developernajib@pm.me
                    </div>
                    <button className="contact-me">
                      <a href="https://www.t.me/developernajib">Let's Talk</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  onClick={() => DataSection(1)}
                  data-section="#about"
                  className="is-active"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => DataSection(2)}
                  data-section="#experience"
                >
                  EXPERIENCE
                </button>
                <button onClick={() => DataSection(3)} data-section="#contact">
                  CONTACT
                </button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
);
