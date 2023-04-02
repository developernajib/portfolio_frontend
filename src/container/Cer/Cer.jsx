import React, { useState, useEffect, Fragment } from "react";
import { AiFillEye } from "react-icons/ai";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import "./Cer.css";

const Cer = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	useEffect(() => {
		const query = '*[_type == "certificates"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};
	return (
		<Fragment>
			<section className="certificates">
				<h1 className="head-text">Certificates</h1>
				<div className="app__work-filter make-center">
					{["All", "Blockchain", "Web", "Programming", "Others"].map(
						(item, index) => (
							<div
								key={index}
								onClick={() => handleWorkFilter(item)}
								className={`app__work-filter-item app__flex p-text ${
									activeFilter === item ? "item-active" : ""
								}`}
							>
								{item}
							</div>
						)
					)}
				</div>
				<motion.div
					animate={animateCard}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
					className="app__work-portfolio"
				>
					{filterWork.map((work, index) => (
						<div
							className="app__work-item app__flex"
							key={index}
							style={{ width: "350px" }}
						>
							<div className="app__work-img app__flex">
								<img
									src={urlFor(work.imgUrl)}
									alt={work.name}
								/>

								<motion.div
									whileHover={{ opacity: [0, 1] }}
									transition={{
										duration: 0.25,
										ease: "easeInOut",
										staggerChildren: 0.5,
									}}
									className="app__work-hover app__flex"
								>
									<a
										href={work.link}
										type="button"
										rel="noreferrer"
									>
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{ duration: 0.25 }}
											className="app__flex"
										>
											<AiFillEye />
										</motion.div>
									</a>
								</motion.div>
							</div>

							<div className="app__work-content app__flex">
								<h4 className="bold-text">{work.title}</h4>
								<p className="p-text" style={{ marginTop: 10 }}>
									{work.description}
								</p>

								<div className="app__work-tag app__flex">
									<p className="p-text">{work.tags[0]}</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</section>
		</Fragment>
	);
};

export default Cer;
