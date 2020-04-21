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
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <ul className="linksinternos">
            <li><Link to="/"><FontAwesomeIcon icon={faHome} size="lg" /></Link></li>
            <li><Link to="/projetos"><FontAwesomeIcon icon={faCode} size="lg" /></Link></li>
            <li><Link to="/skill"><FontAwesomeIcon icon={faCog} size="lg" /></Link></li>
            <li><Link to="/contato"><FontAwesomeIcon icon={faEnvelope} size="lg"/></Link></li>
        </ul>
        <ul className="linksexternos">
          <li><a href="https://www.instagram.com/marsolinha_/"><FontAwesomeIcon icon={faInstagram} size="sm" /></a></li>
          <li><a href="https://www.linkedin.com/in/vinicius-marsola-685154195/"><FontAwesomeIcon icon={faLinkedin} size="sm" /></a></li>
          <li><a href="https://github.com/Mionzinho"><FontAwesomeIcon icon={faGithub} size="sm" /></a></li>    
        </ul>
      </nav>
    )
}