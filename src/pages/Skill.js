import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu'

export default () => {
  const skill = useSelector(state => state.skill)

  return (
    <>
      <div className="container">
        <Menu></Menu>
        <div className="habilidades">
          <ul>
            {skill.map(skill => (
              <>
                <li>{skill.nome}</li>
                <li>{skill.img}</li>
              </>
              ))} 
          </ul>
        </div>
        <h2 className="titulo-alternativo">Habilidades & <br></br>Experiências</h2>
      </div> 
    </>
    )
}

