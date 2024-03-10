import React from "react";
import "../style/Admin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Componant/Navbar ";
import { BallTriangle } from "react-loader-spinner";
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
	async function delpost(id) {
		await axios.delete(`http://localhost:3000/movie/${id}`, movie);
		alert("post deleted");
		setmovie(movie.filter((item) => item.id !== id));
	}
	return (
		<>
			<div className="admin">
				<Navbar />
				<div className="add">
					<div className="a-table">
						<Link to={"/addmovie"}>
							<button className="a-btn">add Movie</button>
						</Link>

						<div className="m-list">
							<table id="customers">
								<tr>
									<th>id</th>
									<th>Thumbnail</th>
									<th>quality</th>
									<th>catagory</th>
									<th>year</th>
									<th>Length</th>
									<th>Action</th>
								</tr>
								{movie && movie.length > 0 ? (
									<>
										{movie?.map((item, index) => (
											<tr>
												<td>{item?.id}</td>
												<td>
													<img src={item?.image} alt="" />
												</td>
												<td>{item?.quallity}</td>
												<td>{item?.catagory}</td>
												<td>{item?.year}</td>
												<td>{item?.length}</td>
												<td>
													<Link to={`/detail/${item?.id}`}>
														<i class="fa-solid fa-eye"></i>
													</Link>

													<Link to={`/edit/movie/${item?.id}`}>
														<i class="fa-regular fa-pen-to-square"></i>
													</Link>

													<i
														class="fa-solid fa-trash-can"
														onClick={() => delpost(item?.id)}
													>
														{" "}
													</i>
												</td>
											</tr>
										))}
									</>
								) : (
									<>
										<div
											style={{
												position: "absolute",
												top: "20%",
												left: "50%",
											}}
										>
											<BallTriangle
												height={100}
												width={100}
												radius={5}
												color="#efd808"
												ariaLabel="ball-triangle-loading"
												wrapperStyle={{}}
												wrapperClass=""
												visible={true}
											/>
										</div>
									</>
								)}
								{/* {movie?.map((item, index) => (
									<tr>
										<td>{item?.id}</td>
										<td>
											<img src={item?.image} alt="" />
										</td>
										<td>{item?.quallity}</td>
										<td>{item?.catagory}</td>
										<td>{item?.year}</td>
										<td>{item?.length}</td>
										<td>
											<Link to={`/detail/${item?.id}`}>
												<i class="fa-solid fa-eye"></i>
											</Link>

											<Link to={`/edit/movie/${item?.id}`}>
												<i class="fa-regular fa-pen-to-square"></i>
											</Link>

											<i
												class="fa-solid fa-trash-can"
												onClick={() => delpost(item?.id)}
											>
												{" "}
											</i>
										</td>
									</tr>
								))} */}
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
