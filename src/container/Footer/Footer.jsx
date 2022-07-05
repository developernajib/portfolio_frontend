import React from "react";
import FooterAvatar from "../../assets/footer_avatar.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div class="footer-wrapper d-flex mt-4">
                    <div class="footer-hero">
                        <div class="footer-contact">
                            <div class="mini-heading-green">
                                It's never too late to dream
                            </div>
                            <h2 class="heading-h2-v2 mb-5">
                                <a href="https://www.t.me/developernajib">
                                    Let’s Talk
                                </a>
                            </h2>
                        </div>

                        <span>
                            <span className="social-text">
                                Follow me on -----
                            </span>
                            <a
                                className="social-icons"
                                href="https://www.facebook.com/developernajib/"
                            >
                                <BsFacebook />
                            </a>
                            <a
                                className="social-icons"
                                href="https://www.twitter.com/developernajib/"
                            >
                                <AiOutlineTwitter />
                            </a>
                            <a
                                className="social-icons"
                                href="https://www.t.me/developernajib/"
                            >
                                <FaTelegram />
                            </a>
                            <a
                                className="social-icons"
                                href="https://www.linkedin.com/in/developernajib/"
                            >
                                <BsLinkedin />
                            </a>
                        </span>
                    </div>
                    <div>
                        <img
                            src={FooterAvatar}
                            alt="footer-avatar"
                            class="footer-avatar"
                            style={{ width: "281px" }}
                        />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
