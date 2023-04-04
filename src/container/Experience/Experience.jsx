import React, { Fragment } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./index";
import "./styles.css";

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#333",
				marginBottom: "50px",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "100%",
					}}
				>
					<img
						src={experience.icon}
						alt={experience.company_name}
						style={{
							width: "60%",
							height: "60%",
							objectFit: "contain",
						}}
					/>
				</div>
			}
		>
			<div>
				<h3
					style={{
						color: "#fff",
						fontSize: "24px",
						fontWeight: "bold",
					}}
				>
					{experience.title}
				</h3>
				<p
					style={{
						color: "#eee",
						fontSize: "16px",
						fontWeight: "bold",
						margin: 0,
					}}
				>
					{experience.company_name}
				</p>
			</div>

			<ul
				style={{
					color: "#ddd",
					marginTop: "5px",
					listStyleType: "disc",
					marginLeft: "20px",
				}}
			>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						style={{
							marginTop: "5px",
							listStyleType: "disc",
							marginLeft: "20px",
						}}
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<Fragment>
			<motion.div>
				<p
					style={{
						fontSize: "18px",
						textAlign: "center",
						marginBottom: "10px",
						marginTop: "50px",
					}}
				>
					What I have <span style={{ color: "#313bac" }}>done</span>{" "}
					so far
				</p>
				<h2
					style={{
						fontSize: "36px",
						textAlign: "center",
						marginBottom: "60px",
					}}
				>
					Work <span style={{ color: "#313bac" }}>Experience</span>
				</h2>
			</motion.div>

			<div
				style={{
					marginTop: "20px",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</Fragment>
	);
};

export default Experience;
