import React from 'react'
import logo from '../img/logo.png';
import home from '../img/home.png';
import code from '../img/code.png';
import skill from '../img/skill.png';
import contato from '../img/contato.png';
import insta from '../img/instagram.png';
import git from '../img/github.png';
import linkedin from '../img/linkedin.png';



const m = () => {
    return (
      <>
      <nav>
           <a href="#"> <img src={logo} alt="logo"/></a>
           
            <ul className="linksinternos">
                <a href="#"><li><img src={home} alt="home"/></li></a>
                <a href="#"><li><img src={code} alt="meus projetos"/></li></a>
                <a href="#"><li><img src={skill} alt="minhas habilidades"/></li></a>
                <a href="#"><li><img src={contato} alt="contato"/></li></a>
            </ul>
            <ul className="linksexternos">
             <a href="#"><li><img src={insta} alt="instagram"/></li></a>
             <a href="#"><li><img src={git} alt="github"/></li></a>
             <a href="#"><li><img src={linkedin} alt="linkedin"/></li></a>
            </ul>
      </nav>
      </>
      )
  }
  
  export default m
  
