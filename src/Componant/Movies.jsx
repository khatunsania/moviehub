import React from "react";
import "../style/Movies.css";
import Mcard from "./Mcard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Movies = () => {
	const [movie, setmovie] = useState([]);
	async function getmovie() {
		const { data } = await axios.get("http://localhost:3000/movie");
		setmovie(data);
		console.log(data);
	}
	useEffect(function () {
		getmovie();
	}, []);
	return (
		<>
			<div className="movies">
				<div className="up-movies">
					<div className="m-text">
						<p>ONLINE STREAMING</p>
						<h2>Upcoming Movies</h2>
					</div>
					<div className="m-btn">
						<ul>
							<li>
								<a href="#">Tv Shows</a>
							</li>
							<li>
								<a href="#">Movies</a>
							</li>
							<li>
								<a href="#">Anime</a>
							</li>
							<button>
								<i class="fas fa-angle-left"></i>
								<i class="fas fa-angle-right"></i>
							</button>
						</ul>
					</div>
				</div>
				<div className="movie-card">
					{movie?.map((item, index) => (
						<>
							<div className="m-1" key={index}>
								<Mcard item={item} />
							</div>
						</>
					))}
					{/* <div className="m-1">
						<Mcard />
					</div>
					<div className="m-1">
						<Mcard />
					</div>
					<div className="m-1">
						<Mcard />
					</div>
					<div className="m-1">
						<Mcard />
					</div> */}
					{/* <div className="m-1">
						<Mcard />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Movies;
