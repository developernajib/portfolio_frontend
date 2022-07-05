import React from "react";
import {
    Navbar,
    Header,
    About,
    Service,
    Work,
    Skills,
    Testimonial,
    Contact,
    Footer,
} from "../../container";

const Home = () => {
    return (
        <>
            <div className="app">
                <Navbar />
                <Header />
                <About />
                <Service />
                <Work />
                <Skills />
                <Testimonial />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default Home;
