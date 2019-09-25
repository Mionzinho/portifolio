  
import React from 'react'
import Menu from '../components/Menu'
import Listaskill from '../components/Listaskill'


export default () => {

  return (
    <>
      <div className="container">
        <Menu></Menu>
        <div className="container-enter">
        <Listaskill></Listaskill>
        <h2 className="titulo-alternativo">Habilidades & <br/>Experiências</h2>
        </div>
      </div> 
    </>
    )
}