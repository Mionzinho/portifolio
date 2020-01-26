import React from 'react'
import logo from '../img/logo.png'
// get our fontawesome imports
import { faHome, faCode, faCog, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
      <nav>
        <a href="/"> <img src={logo} alt="logo"/></a>
        
        <ul className="linksinternos">
            <li><a href="/"><FontAwesomeIcon icon={faHome} size="lg" /></a></li>
            <li><Link to="/projetos"><FontAwesomeIcon icon={faCode} size="lg" /></Link></li>
            <li><a href="/skill"><FontAwesomeIcon icon={faCog} size="lg" /></a></li>
            <li><a href="/contato"><FontAwesomeIcon icon={faEnvelope} size="lg"/></a></li>
        </ul>
        <ul className="linksexternos">
          <li><a href="https://www.instagram.com/marsolinha_/"><FontAwesomeIcon icon={faInstagram} size="sm" /></a></li>
          <li><a href="https://www.linkedin.com/in/vinicius-marsola-685154195/"><FontAwesomeIcon icon={faLinkedin} size="sm" /></a></li>
          <li><a href="https://github.com/Mionzinho"><FontAwesomeIcon icon={faGithub} size="sm" /></a></li>    
        </ul>
      </nav>
    )
}