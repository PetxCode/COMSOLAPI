import React from "react";
import styled from "styled-components";
import ExploreProps from "./ExploreProps";

const Explore = () => {
	return (
		<Container>
			<ExploreProps
				title="Business Plan"
				text="Create a new pipeline or choose an existing one and add this app to a stage in it."
			/>

			{/* <Line /> */}
			<ExploreProps
				title="Financial Planning"
				text="Create a new pipeline or choose an existing one and add this app to a stage in it."
			/>
			{/* <Line /> */}
			<ExploreProps
				title="Market Analysis"
				text="Create a new pipeline or choose an existing one and add this app to a stage in it."
			/>
		</Container>
	);
};

export default Explore;

const Line = styled.div`
	border-left: 1px solid silver;
	margin: 0 50px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

const Container = styled.div`
	width: 100%;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	/* margin: 50px; */
`;
