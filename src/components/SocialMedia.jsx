import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.facebook.com/developernajib" title="Facebook">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/developernajib" title="Linkedin">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://www.github.com/developernajib" title="Github">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.t.me/developernajib" title="Telegram">
        <FaTelegramPlane />
      </a>
    </div>
  </div>
);

export default SocialMedia;
