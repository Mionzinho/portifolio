import React from 'react'
import logo from '../img/logo.png'
// get our fontawesome imports
import { faHome, faCode, faCog, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Menu() {
    return (
      <nav>
        <a href="#"> <img src={logo} alt="logo"/></a>
        
        <ul className="linksinternos">
            <li><a href="/"><FontAwesomeIcon icon={faHome} size="lg" /></a></li>
            <li><a href="/Skill"><FontAwesomeIcon icon={faCode} size="lg" /></a></li>
            <li><a href="/Projetos"><FontAwesomeIcon icon={faCog} size="lg" /></a></li>
            <li><a href="/Contato"><FontAwesomeIcon icon={faEnvelope} size="lg"/></a></li>
        </ul>
        <ul className="linksexternos">
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} size="sm" /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size="sm" /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faGithub} size="sm" /></a></li>    
        </ul>
      </nav>
    )
}