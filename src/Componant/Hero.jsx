import React from "react";
import Navbar from "./Navbar ";
import "../style/Hero.css";
const Hero = () => {
	return (
		<>
			<div className="hero-sec">
				<div className="hero">
					<Navbar />
					<div className="h-text">
						<h3>Movflx</h3>
						<h1>
							Unlimited <span>Movie</span> , TVs Shows, & More.
						</h1>

						<ul>
							<li className="quality">
								<span>Pg 18</span>
								<span className="hd">hd</span>
							</li>
							<li classname="category">
								<a href="#">Romance,</a>
								<a href="#">Drama</a>
							</li>
							<li classname="release-time">
								<span>
									<i class="far fa-calendar-alt"></i> 2021
								</span>
								<span>
									<i class="far fa-clock"></i> 128 min
								</span>
							</li>
						</ul>
						<button>
							<i class="fas fa-play"></i>Watch now
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
