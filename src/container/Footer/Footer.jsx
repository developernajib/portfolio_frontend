import React, { Fragment } from "react";
import FooterAvatar from "../../assets/footer_avatar.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	return (
		<Fragment>
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

						<div className="d-flex align-items-center">
							<span className="social-text">
								Follow me on -----
							</span>
							<div>
								<a
									className="social-icons"
									href="https://www.facebook.com/developernajibpage/"
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
							</div>
						</div>
					</div>
					<div>
						<img
							src={FooterAvatar}
							alt="footer-avatar"
							class="footer-avatar"
							style={{ width: "270px" }}
						/>
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
