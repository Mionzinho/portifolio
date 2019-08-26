import React from 'react'
import Ola from '../components/Ola'
import Menu from '../components/Menu'

export default function home() {

  return (
    <>
      <div className="container">
        <Menu></Menu>
        <Ola></Ola>
        <div className="souweb">
          <p className="texto">Sou um <b>Web Developer</b>, amante do <b>automobilismo</b>,<br></br>
                              praticante de <b>musculação</b> e <b>positivista</b> movido a<br></br>
                              café e resiliência.</p>
          <h3 className="texto">VEJA MEUS PROJETOS</h3>           
        </div>
      </div> 
    </>
    )
}