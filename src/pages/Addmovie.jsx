import React, { useState } from "react";
import "../style/Addmovie.css";
import Navbar from "../Componant/Navbar ";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addmovie = () => {
	const [movie, setmovie] = useState({
		title: "",
		image: "",
		quallity: "",
		catagory: "",
		year: "",
		ageRatting: "",
		length: "",
		like: "",
		description: "",
		videoLink: "",
	});
	const navigate = useNavigate();
	function handlechange(e) {
		setmovie({
			...movie,
			[e.target.name]: e.target.value,
		});
	}
	async function addmovie() {
		try {
			await axios.post("http://localhost:3000/movie", movie);
			navigate("/admin");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<div className="addmovie">
				<Navbar />
				<div className="a-title">
					<h2>Add Movie</h2>
				</div>
				<div className="a-movie">
					<div className="form">
						<div className="f-input">
							<label>
								<input
									type="text"
									placeholder="Add Title"
									name="title"
									onChange={handlechange}
								/>
							</label>
						</div>
						<div className="f-input">
							<label>
								<input
									type="text"
									placeholder="Add image"
									name="image"
									onChange={handlechange}
								/>
							</label>{" "}
						</div>
						<div className="f-input">
							<label className="quality">
								<div>choose a quality:</div>
								<select name="quallity" onChange={handlechange}>
									<option value="HD">HD</option>
									<option value="8k">8k</option>
									<option value="4k">4k</option>
									<option value="14k">14k</option>
								</select>
							</label>{" "}
						</div>
						<div className="f-input">
							<label className="quality">
								<div>choose a catagory:</div>

								<select name="catagory" onChange={handlechange}>
									<option value="Thriller ">Thriller</option>
									<option value="Action">Action</option>
									<option value="Romance">Romance</option>
									<option value="Animation">Animation</option>
									<option value="Comedy">Comedy</option>
								</select>
							</label>
						</div>
						<div className="f-input">
							<label>
								<input
									type="text"
									placeholder="Add year"
									name="year"
									onChange={handlechange}
								/>
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<input
									type="text"
									placeholder="Add ageratting"
									name="ageeRatting"
									onChange={handlechange}
								/>
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<input
									type="text"
									placeholder="Add like"
									name="like"
									onChange={handlechange}
								/>
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<input
									type="text"
									placeholder="Add length"
									name="length"
									onChange={handlechange}
								/>
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<textarea
									placeholder="add description"
									name="decription"
									onChange={handlechange}
								></textarea>
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<input
									type="text"
									placeholder="Add Videolink"
									name="videoLink"
									onChange={handlechange}
								/>
							</label>{" "}
						</div>
						<button onClick={addmovie}>Submit</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Addmovie;
