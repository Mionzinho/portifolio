import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const skill = useSelector(state => state.skill)

  return (
          <ul className="listaskill">
            {skill.map(skill => (
              <>
                <li>{skill.nome}</li>
                <li>{skill.img}</li>
              </>
              ))} 
          </ul>
      )
  }
    
