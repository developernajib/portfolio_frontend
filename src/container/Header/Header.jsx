import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import Typical from "react-typical";
import Animation from "../../components/Animation/Animation";
import ComputersCanvas from "./Computers";
import "./Header.css";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<Fragment>
			<Animation />
			<div className="app__header app__flex">
				<motion.div
					whileInView={{ opacity: [0, 1], x: [-200, 0] }}
					transition={{ duration: 0.5 }}
					className="app__header-info make-center"
				>
					<div className="left top">
						<p>Welcome to my World</p>
						<h1 className="gray-color my-3">
							Hi, I’m{" "}
							<span className="itsMe">Md. Najib Islam</span>
						</h1>
						<h2>
							a
							<Typical
								steps={[
									2000,
									" Full Stack Developer",
									4000,
									" PHP & Laravel Developer",
									5000,
									" Blockchain Developer",
									4000,
									" Blockchain Enthusiast",
									3000,
									" Programmer",
									4000,
								]}
								loop={Infinity}
								wrapper="span"
							/>
						</h2>

						<p className="my-4">
							There is no wrong path, no wrong decision, only who
							you choose to became.
						</p>
						<a href="#contact" className="review-btn">
							Contact Now
						</a>
					</div>
				</motion.div>

				<ComputersCanvas />
			</div>
		</Fragment>
	);
};

export default AppWrap(Header, "home");
