import React, { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Service.css";
import { urlFor, client } from "../../client";

const Service = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => {
			setAbouts(data);
		});
	}, []);

	return (
		<Fragment>
			<h2 className="head-text" id="service">
				I Know that <span>Good Developer</span> <br />
				means <span>Good Business</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</Fragment>
	);
};

export default AppWrap(
	MotionWrap(Service, "app__about"),
	"service",
	"app__whitebg"
);
