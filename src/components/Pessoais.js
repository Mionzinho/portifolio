import React from 'react'
import eu from '../img/Ellipse.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"



const Pessoais = () => {
    return (
        <>
          <div className="flex-row">
            <img src={eu} alt="eu"/>
              <ul>
                <li className="lista-info"><p className="texto">Vinicius Marsola de Matos</p></li>  
                <li className="lista-info"><p className="texto"><FontAwesomeIcon className="icone-wpp" icon={faWhatsapp} size="lg"/> +55 11 997750373</p></li>
                <li className="lista-info"><p className="texto">vinicius.marsola2@gmail.com</p></li>
              </ul>
          </div>
        </>
      )
  }
  
  export default Pessoais
  
