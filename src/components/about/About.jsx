import React from "react";
import "./about.css";
// import ME from "../../assets/me-about.jpg"
import ME from "../../assets/AR.png";
import { FiAward } from "react-icons/fi";
import { SiJavascript } from "react-icons/si";
import { HiLightBulb } from "react-icons/hi";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FiAward className="about__icon" />
							<h5>Experience</h5>
							<small>3+ Years Working</small>
						</article>

						<a href="#portfolio">
							<article className="about__card">
								<SiJavascript className="about__icon" />
								<h5>Projects</h5>
								<small>3+ Projects</small>
							</article>
						</a>

						<article className="about__card">
							<HiLightBulb className="about__icon" />
							<h5>Skills</h5>

							<small>Fullstack Development</small>
						</article>
					</div>
					<p>
						Dedicated and efficient full stack developer with 3+
						years experience in designing and developing web
						applications.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
