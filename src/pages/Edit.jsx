import React from "react";
import "../style/Edit.css";
import Navbar from "../Componant/Navbar ";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Edit = () => {
	const [movie, setmovie] = useState({
		title: "",
		image: "",
		quallity: "HD",
		catagory: "",
		year: "",
		ageRatting: "",
		length: "",
		like: "",
		desc: "",
		videoLink: "",
	});
	const params = useParams();
	const navigate = useNavigate();

	async function getData() {
		const { data } = await axios.get(
			`http://localhost:3000/movie/${params.id}`
		);
		console.log(data);
		setmovie(data);
	}
	useEffect(function () {
		getData();
	}, []);

	function handlechange(e) {
		setmovie({
			...movie,
			[e.target.name]: e.target.value,
		});
	}
	async function addmovie() {
		try {
			await axios.put(`http://localhost:3000/movie/${params.id}`, movie);
			navigate("/admin");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<div className="edit-sec">
				<div className="addmovie">
					<Navbar />
					<div className="a-title">
						<h2>Edit Movie</h2>
					</div>
					<div className="a-movie">
						<div className="form">
							<div className="f-input">
								<label>
									<input
										type="text"
										placeholder="Add Title"
										name="title"
										value={movie?.title}
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
										value={movie?.image}
										onChange={handlechange}
									/>
								</label>{" "}
							</div>
							<div className="f-input">
								<label className="quality">
									<div>choose a quality:</div>
									<select
										name="quallity"
										value={movie?.quallity}
										onChange={handlechange}
									>
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

									<select
										name="catagory"
										value={movie?.catagory}
										onChange={handlechange}
									>
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
										value={movie?.year}
										onChange={handlechange}
									/>
								</label>{" "}
							</div>
							<div className="f-input">
								<label>
									<input
										type="text"
										placeholder="Add ageratting"
										name="ageRatting"
										onChange={handlechange}
										value={movie?.ageRatting}
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
										value={movie?.like}
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
										value={movie?.length}
									/>
								</label>{" "}
							</div>
							<div className="f-input">
								<label>
									<textarea
										placeholder="add description"
										name="desc"
										onChange={handlechange}
										value={movie?.desc}
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
										value={movie?.videoLink}
									/>
								</label>{" "}
							</div>
							<button onClick={addmovie}>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
