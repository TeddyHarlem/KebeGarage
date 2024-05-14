import React from "react";

function Contactus() {
	return (
		<div>
			<section className="contact-section">
				<div className="auto-container">
					<div className="row clearfix">
						{/* <!--Form Column--> */}
						<div className="form-column col-lg-7">
							<div className="inner-column">
								<div className="contact-map">
									<iframe
										title="Google Map"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.05952776529!2d38.69574375649734!3d8.963337303490135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1711732174355!5m2!1sen!2sus"
										width="50%"
										height="400"
										style={{ border: 0, width: "100%" }}
										allowFullScreen
									></iframe>
								</div>
							</div>
						</div>

						{/* <!--Info Column--> */}
						<div className="info-column col-lg-5">
							<div className="inner-column">
								<h4>Our Address</h4>
								<div className="text">
									Our garage is a trusted destination for all your automotive
									needs. We offer a comprehensive range of automotive services
									to keep your vehicle running smoothly.
								</div>
								<ul>
									<li>
										<i className="flaticon-pin"></i>
										<span>Address:</span>12/13, Addis Ababa 1000, Ethiopia
									</li>
									{/* <li>
										<i className="flaticon-email"></i>
										<span>email:</span> contact@buildtruck.com
									</li> */}
									<li>
										<i className="flaticon-phone"></i>
										<span>phone:</span> + 251 92 420 7890
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contactus;
