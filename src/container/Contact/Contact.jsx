import React, { Fragment, useState } from "react";
import { images } from "../../constants";
import { client } from "../../client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: formData.username,
			email: formData.email,
			message: formData.message,
		};

		client
			.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));
	};
	return (
		<Fragment>
			<section id="contact">
				<h2 className="head-text">
					Wanna contact with me
					<span style={{ color: "var(--secondary-color)" }}>?</span>
				</h2>

				<div className=" app__contact-cards" id="review_now">
					<div className="app__contact-card ">
						<img src={images.email} alt="email" />
						<a
							href="mailto:developernajib@gmail.com"
							className="p-text"
						>
							developernajib@gmail.com
						</a>
					</div>
					<div className="app__contact-card">
						<img src={images.mobile} alt="phone" />
						<a href="tel:+8801537500950" className="p-text">
							+88 01537-500950
						</a>
					</div>
				</div>
				<div className="booking-section">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="booking">
									<form>
										<div className="form-heading">
											<h1 className="about-heading mb-3">
												Contact Me
											</h1>
										</div>
										<div className="form-1">
											<input
												type="text"
												id="full-name"
												className="p-input"
												placeholder="Full Name"
												name="username"
												value={username}
												onChange={handleChangeInput}
												required
											/>
											<label
												for="full-name"
												className="p-label"
											>
												Full Name
											</label>
										</div>
										<div className="form-2">
											<input
												type="email"
												id="email-add"
												className="p-input"
												placeholder="Your Email Address"
												name="email"
												value={email}
												onChange={handleChangeInput}
												required
											/>
											<label
												for="email-add"
												className="p-label"
											>
												Email Address
											</label>
										</div>
										<div className="">
											<textarea
												cols="10"
												rows="10"
												type="text"
												id="full-name"
												className="p-input text-area"
												placeholder="Enter your message...."
												name="message"
												value={message}
												onChange={handleChangeInput}
												required
											/>
											<label
												for="message"
												className="p-label"
											>
												Message
											</label>
										</div>
										<button
											type="button"
											className="p-text submit-btn cursor-pointer"
											onClick={handleSubmit}
										>
											{!loading
												? "Send Message"
												: `Sending...`}
										</button>
										<br />
										<br />
										{isFormSubmitted
											? toast.success(
													`Form Submitted Successfully!`
											  )
											: ""}
										{isFormSubmitted ? (
											<span> - is your messaging id</span>
										) : (
											""
										)}
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</section>
		</Fragment>
	);
};
export default Contact;
