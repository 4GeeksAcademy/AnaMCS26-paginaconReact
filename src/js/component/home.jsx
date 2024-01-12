import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./card";


//create your first component
const Home = () => {
	return (
		<div className="container, text-center">
			<NavBar />
			<div>
				<Jumbotron />
			</div>
			<div className="d-flex flex-wrap justify-content-around mt-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			
			<div className="p-2 mb-2 bg-secondary text-white" style={{marginTop:'10px'}}>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
					love!
				</p>
			</div>
		</div>
	);
};

export default Home;