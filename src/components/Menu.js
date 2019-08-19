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
          <a href="/"><li><FontAwesomeIcon icon={faHome} size="2x" /></li></a>
          <a href="/Skill"><FontAwesomeIcon icon={faCode} size="2x" /><li></li></a>
          <a href="/Projetos"><FontAwesomeIcon icon={faCog} size="2x" /><li></li></a>
          <a href="/Contato"><FontAwesomeIcon icon={faEnvelope} size="2x" /><li></li></a>
        </ul>
        <ul className="linksexternos">
          <a href="#"><li><FontAwesomeIcon icon={faInstagram} size="2x" /></li></a>
          <a href="#"><li><FontAwesomeIcon icon={faLinkedin} size="2x" /></li></a>
          <a href="#"><li><FontAwesomeIcon icon={faGithub} size="2x" /></li></a>    
        </ul>
      </nav>
    )
}