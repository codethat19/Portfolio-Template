import React from 'react'
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs";
import  {FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {SiJquery, SiExpress, SiMongodb, SiMysql} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
              
            </article>
            <article className='experience__details'>
              <FaCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
              <h4>React</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <SiJquery className='experience__details-icon' />
              <div>
              <h4>jQuery</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
              <h4>Node.js</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <div>
              <h4>Express.js</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
              <h4>MongoDB</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience