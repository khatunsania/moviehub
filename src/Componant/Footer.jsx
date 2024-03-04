import React from "react";
import "../style/Footer.css";
const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="foot-cont">
					<div className="f-text">
						<h3>TRIAL START FIRST 30 DAYS.</h3>
						<p>Enter your email to create or restart your membership.</p>
					</div>
					<div className="f-mail">
						<div className="form">
							<input type="Email" placeholder="Enter Your Email" />
							<button>Get Started</button>
						</div>
					</div>
				</div>
			</div>
			<div className="foot-end">
				<div className="foot">
					<div className="f-cont">
						<div className="f-logo">
							<img src="/img/logo.png" alt="" />
						</div>
						<div className="f-bars">
							<ul>
								<li>home</li>
								<li>movie</li>
								<li>tv show</li>
								<li>pages</li>
								<li>princing</li>
								<div className="f-search">
									<input type="text" placeholder="Find Favorite Movie" />

									<i class="fas fa-search"></i>
								</div>
							</ul>
						</div>
					</div>
					<div className="f-social">
						<div className="f-list">
							<ul>
								<li>Faq</li>
								<li>help center</li>
								<li>TERMS OF USE</li>
								<li>privecy</li>
							</ul>
						</div>
						<div className="f-icon">
							<ul>
								<li>
									<i class="fab fa-facebook-f"></i>
								</li>
								<li>
									<i class="fab fa-twitter"></i>
								</li>
								<li>
									<i class="fab fa-pinterest-p"></i>
								</li>
								<li>
									<i class="fab fa-linkedin-in"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
