import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [show, setShow] = useState(false);
	useEffect(function () {
		const user = localStorage.getItem("user");
		if (!user) {
			setShow(true);
		}
	}, []);
	return (
		<>
			<div className="navbar">
				<div className="nav">
					<div className="logo">
						<div className="logo-img">
							<img src="/img/logo.png" />
						</div>
						{/* <div className="logo-text">
							<h1>movieflix</h1>
						</div> */}
					</div>
					<div className="bars">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/detail">Movie</Link>
							</li>
							<li>tv show</li>
							<li>princing</li>
							<li>blog</li>
							<li>contact</li>
						</ul>
					</div>
					<div className="menu">
						<i class="fa-solid fa-magnifying-glass"></i>
						{show ? (
							<>
								<Link to="/login">
									<button>sign in</button>
								</Link>
							</>
						) : (
							<>
								<button>Log Out</button>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
 