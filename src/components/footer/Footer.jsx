import React from 'react'
import "./footer.css";
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si';

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer>
      <a href="#" className='footer__logo'>AR</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/aayush-rastogi" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/codethat19" target="_blank"><BsGithub /></a>
        <a href="https://leetcode.com/aayushrastogi1997/" target="_blank"><SiLeetcode /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {year} Aayush Rastogi</small>
      </div>
    </footer>
  )
}

export default Footer