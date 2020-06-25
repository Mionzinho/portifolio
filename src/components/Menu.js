import React from 'react'
import logo from '../assets/logo.png'
import { FaHome, FaCode, FaCog, FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Menu() {

  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="links-internos">
        <li><Link to="/" ><FaHome /></Link></li>
        <li><Link to="/projetos"><FaCode /></Link></li>
        <li><Link to="/skill"><FaCog /></Link></li>
        <li><Link to="/contato"><FaEnvelope /></Link></li>
      </ul>
      <ul className="links-externos">
        <li><a href="https://www.instagram.com/marsolinha_/" target="blank"><FaInstagram /></a></li>
        <li><a href="https://www.linkedin.com/in/vinicius-marsola-685154195/" target="blank"><FaLinkedin /></a></li>
        <li><a href="https://github.com/Mionzinho" target="blank"><FaGithub /></a></li>
      </ul>
    </nav>
  )
}