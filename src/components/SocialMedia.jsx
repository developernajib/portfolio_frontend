import React from "react";
import { FaFacebookF, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://www.facebook.com/developernajib" title="Facebook">
                <FaFacebookF />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/developernaib" title="Linkedin">
                <FaLinkedinIn />
            </a>
        </div>
        <div>
            <a href="https://www.t.me/developernaib" title="Telegram">
                <FaTelegramPlane />
            </a>
        </div>
    </div>
);

export default SocialMedia;
