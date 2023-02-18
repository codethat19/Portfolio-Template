import React from 'react'
import "./about.css";
import ME from "../../assets/me-about.jpg"
import {FiAward} from 'react-icons/fi';
import {SiJavascript} from "react-icons/si";
import {HiLightBulb} from "react-icons/hi";

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
              <FiAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <SiJavascript className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>

            <article className="about__card">
              <HiLightBulb className="about__icon"/>
              <h5>Skills</h5>
              <small>Fullstack Development</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo dolores autem eius incidunt vitae reprehenderit aliquid esse quisquam quasi in corporis eveniet, hic quod enim ex. Laudantium, itaque amet.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About