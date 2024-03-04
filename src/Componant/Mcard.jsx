import React from "react";
import "../style/Mcard.css";
import { Link } from "react-router-dom";
const Mcard = ({ item }) => {
	return (
		<div className="m-card">
			<div className="m-img">
				<Link to={`/detail/${item?.id}`}>
					<img src={item?.image} alt="" />
				</Link>
			</div>
			<div className="m-text">
				<h4 className="title">
					<a href="#">{item?.title}</a>
				</h4>
				<span classname="date">{item?.year}</span>
			</div>
			<div class="bottom">
				<ul>
					<li>
						<p>{item?.quallity}</p>
					</li>
					<li>
						<span classname="duration">
							<i class="far fa-clock"></i> 128 min
						</span>
						<span classname="rating">
							<i class="fas fa-thumbs-up"></i> 3.5
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Mcard;
