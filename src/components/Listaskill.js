import React from 'react'
// import { useSelector } from 'react-redux'
import NodeImg from '../img/node.png'

export default () => {
  // const skill = useSelector(state => state.skill)

  return (
    <ul className="listaskill">
      <li><img src={NodeImg} alt="nodejs" /></li>
      <li><img src={NodeImg} alt="nodejs" /></li>
      <li><img src={NodeImg} alt="nodejs" /></li>
      <li><img src={NodeImg} alt="nodejs" /></li>
      {/* {skill.map(skill => (
        <>
          <li>{skill.nome}</li>
          <li>{skill.img}</li>
        </>
      ))} */}
    </ul>
  )
}

