import React from "react";
import Explore from "../Explore/Explore";
import RoadMap from "../RoadMap/RoadMap";
import HeroComp from "./HeroComp";
import Second from "./Second";

const Home = () => {
	return (
		<div>
			<HeroComp />
			<Second />
			<Explore />
			<RoadMap />
		</div>
	);
};

export default Home;
