import React, { useState } from "react";
import Navbar from "../Componant/Navbar ";
import "../style/Details.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
const Details = () => {
	const [movie, setmovie] = useState({});
	const params = useParams();
	async function getmovie() {
		const { data } = await axios.get(
			`http://localhost:3000/movie/${params.id}`
		);
		setmovie(data);
		console.log(data);
	}
	useEffect(function () {
		getmovie();
	}, []);
	return (
		<>
			<div className="detail-page">
				<div className="d-nav">
					<Navbar />
				</div>
				<div className="d-hero">
					<div className="d-cont">
						<div className="d-img">
							<img src={movie?.image} alt="" />
						</div>
						<div className="d-text">
							<h4>New Episode</h4>
							<h1>{movie?.title}</h1>
							<ul>
								<li className="quality">
									<span>{movie?.ageRatting}</span>
									<span className="hd">{movie?.quallity}</span>
								</li>
								<li classname="category">
									<a href="#">{movie?.catagory}</a>
									{/* <a href="#">{item?.catagory}</a> */}
								</li>
								<li classname="release-time">
									<span>
										<i class="far fa-calendar-alt"></i> {movie?.year}
									</span>
									<span>
										<i class="far fa-clock"></i> {movie?.length}
									</span>
								</li>
							</ul>
							<p>{movie?.desc}</p>
							<button>
								<Link to={movie?.videoLink}>
									<i class="fas fa-play"></i>watch now
								</Link>
							</button>
						</div>
					</div>
					<div className="down">
						<a href="#">Download</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
