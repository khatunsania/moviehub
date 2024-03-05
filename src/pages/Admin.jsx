import React from "react";
import "../style/Admin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Componant/Navbar ";
import { Link, useNavigate } from "react-router-dom";
const Admin = () => {
	const [movie, setmovie] = useState([]);
	const navigate = useNavigate();
	async function getmovie() {
		const { data } = await axios.get("http://localhost:3000/movie");
		setmovie(data);
		console.log(data);
	}
	useEffect(function () {
		const user = localStorage.getItem("user");
		if (!user) {
			navigate("/");
		}
		getmovie();
	}, []);
	return (
		<>
			<div className="admin">
				<Navbar />
				<div className="add">
					<div className="a-table">
						<button className="a-btn">add Movie</button>
						<div className="m-list">
							<ul>
								<li>Id</li>
								<li>Thumbnail</li>
								<li>Title</li>
								<li>Catagory</li>
								<li>Quality</li>
								<li>Action</li>
							</ul>
						</div>
						<div className="id-list">
							{movie?.map((item, index) => (
								<>
									<ul>
										<li>{item?.id}</li>
										<li>
											<img src={item?.image} alt="" />
										</li>
										<li>{item?.title}</li>
										<li>{item?.catagory}</li>
										<li>{item?.quallity}</li>
										<li>
											<Link to={`/detail/${item?.id}`}>
												<button>
													<i class="fa-solid fa-eye"></i>
												</button>
											</Link>

											<button>
												<i class="fa-solid fa-pen-to-square"></i>
											</button>
											<button>
												<i class="fa-solid fa-trash"></i>
											</button>
										</li>
									</ul>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;