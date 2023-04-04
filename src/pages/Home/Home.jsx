import React, { Fragment } from "react";
import {
	Navbar,
	Header,
	About,
	Experience,
	Service,
	Work,
	Skills,
	Testimonial,
	Contact,
	Footer,
} from "../../container";

const Home = () => {
	return (
		<Fragment>
			<div className="app">
				<Navbar />
				<Header />
				<About />
				<Experience />
				<Service />
				<Work />
				<Skills />
				<Testimonial />
				<Contact />
				<Footer />
			</div>
		</Fragment>
	);
};

export default Home;
