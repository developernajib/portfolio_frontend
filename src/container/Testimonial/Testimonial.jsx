import React, { useState, useEffect, Fragment } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.css";

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [testimonials, setTestimonials] = useState([]);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const query = '*[_type == "testimonials"]';

		client.fetch(query).then((data) => {
			setTestimonials(data);
		});
	}, []);

	return (
		<Fragment>
			<h2 className="head-text mb-4">Testimonial</h2>
			{testimonials.length && (
				<>
					<div className="app__testimonial-item app__flex">
						<img
							src={urlFor(testimonials[currentIndex].imgurl)}
							alt={testimonials[currentIndex].name}
							title={testimonials[currentIndex].name}
						/>
						<div className="app__testimonial-content">
							<p
								className="p-text"
								title={testimonials[currentIndex].name}
							>
								{testimonials[currentIndex].feedback}
							</p>
							<div>
								<h4 className="bold-text">
									{testimonials[currentIndex].name}
								</h4>
								<h5 className="p-text">
									{testimonials[currentIndex].company}
								</h5>
							</div>
						</div>
					</div>

					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}
						>
							<HiChevronLeft />
						</div>

						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}
						>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}
		</Fragment>
	);
};

export default AppWrap(
	MotionWrap(Testimonial, "app__testimonial"),
	"testimonial",
	"app__primarybg"
);
