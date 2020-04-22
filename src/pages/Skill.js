  
import React from 'react'
import Menu from '../components/Menu'
import Listaskill from '../components/Listaskill'


export default () => {

  return (
    <>
      <div className="container">
        {/* <h2 className="titulo-alternativo tituloSkill">Habilidades & Experiências</h2> */}
        <Listaskill></Listaskill>
        <Menu></Menu>
      </div> 
    </>
    )
}