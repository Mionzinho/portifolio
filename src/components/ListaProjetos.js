import React from 'react'
import portifa from '../assets/portifa.png'
import poly from '../assets/poly.png'
import hero from '../assets/hero.png'
import pokedex from '../assets/pokedex.png'

export default function listaProjetos() {

  return (
    <div className="ferris-wrapper">
      <span className="hub-front"></span>
      <div className="wheel-wrapper">
        <div className="wheel">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <div className="cabin first">
            <img src={poly} alt="poly"></img>
            <a href="https://polyservicos.com.br" className="overlay" target="blank">
              <span>VEJA MAIS</span>
            </a>
          </div>
          <div className="cabin second">
            <img src={portifa} alt="portifólio"></img>
            <a href="https://github.com/Mionzinho/portifolio" className="overlay" target="blank">
              <span>VEJA MAIS</span>
            </a>
          </div>
          <div className="cabin third">
            <img src={pokedex} alt="pokedex"></img>
            <a href="https://github.com/Mionzinho/pokedex" className="overlay" target="blank">
              <span>VEJA MAIS</span>
            </a>
          </div>
          <div className="cabin forth">
            <img src={hero} alt="hero"></img>
            <a href="https://github.com/Mionzinho/be-the-hero" className="overlay" target="blank">
              <span>VEJA MAIS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}