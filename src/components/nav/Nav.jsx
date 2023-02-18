import React from 'react'
import "./nav.css";
import {AiOutlineHome, AiOutlineUser, AiOutlineContacts} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md";
import {ImHtmlFive2} from "react-icons/im";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><MdWorkOutline /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><ImHtmlFive2 /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav