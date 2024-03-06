import React from "react";
import "../style/Addmovie.css";
import Navbar from "../Componant/Navbar ";

const Addmovie = () => {
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
								<input type="text" placeholder="Add Title" />
							</label>
						</div>
						<div className="f-input">
							<label>
								<input type="text" placeholder="Add image" />
							</label>{" "}
						</div>
						<div className="f-input">
							<label className="quality">
								<div>choose a quality:</div>
								<select>
									<option value="">HD</option>
									<option value="">8k</option>
									<option value="">4k</option>
									<option value="">14k</option>
								</select>
							</label>{" "}
						</div>
						<div className="f-input">
							<label className="quality">
								<div>choose a catagory:</div>

								<select>
									<option value=" ">Thriller</option>
									<option value="">Action</option>
									<option value="">romance</option>
									<option value="">Animation</option>
									<option value="">comedy</option>
								</select>
							</label>
						</div>
						<div className="f-input">
							<label>
								<input type="text" placeholder="Add year" />
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<input type="text" placeholder="Add ageratting" />
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<input type="text" placeholder="Add like" />
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<input type="text" placeholder="Add length" />
							</label>{" "}
						</div>
						<div className="f-input">
							<label>
								<textarea placeholder="add description"></textarea>
							</label>{" "}
						</div>
						<button>Submit</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Addmovie;
