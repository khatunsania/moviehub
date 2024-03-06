import React, { useState } from "react";
import Navbar from "../Componant/Navbar ";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	async function login() {
		if (email == "" || password == "") {
			console.log("please given input");
		} else {
			const { data } = await axios.get(
				`http://localhost:3000/user?email=${email}&password=${password}`
			);
			console.log(email, password);
			if (data.length > 0) {
				localStorage.setItem("user", JSON.stringify(data));
				navigate("/admin");
			} else {
				alert("your login details are wrong");
			}

			console.log(data);
			setEmail("");
			setPassword("");
		}
	}
	return (
		<>
			<div className="login">
				<div className="l-nav">
					<Navbar />
				</div>
				<div className="l-form">
					<div className="l-t">
						<h2>Login</h2>
					</div>
					<div className="form-cont">
						<div className="form">
							<input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form">
							<input
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button className="l-btn" onClick={login}>
								{" "}
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
