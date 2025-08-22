import React from "react";
import About from "../About/About";
import ProfileAbout from "../Profile/profile";
import Project from "../Project/project";
import Hotline from "../Hotline/hotline";
import "./Home.css";

const Home = () => {
	return (
		<div className="home-all-sections">
			<section id="about-section">
				<About />
			</section>
			<section id="profile-section">
				<ProfileAbout />
			</section>
			<section id="project-section">
				<Project />
			</section>
			<section id="hotline-section">
				<Hotline />
			</section>
		</div>
	);
};

export default Home;