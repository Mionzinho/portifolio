import React from 'react'
// import { useSelector } from 'react-redux'
import SassImg from '../img/sass.png'
import JqueyImg from '../img/jquery.png'
import JavaImg from '../img/java.png'
import ReactImg from '../img/react.png'
import FirebaseImg from '../img/firebase.png'
import NodeImg from '../img/node.png'


export default () => {
  // const skill = useSelector(state => state.skill)

  return (
    <ul className="listaroleta">
      <li className="itemskills"><img src={SassImg} alt="nodejs" /><span>Sass</span></li>
      <li className="itemskills"><img src={JqueyImg} alt="nodejs" /><span>Jquery</span></li>
      <li className="itemskills"><img src={JavaImg} alt="nodejs" /><span>JavaScript</span></li>
      <li className="itemskills"><img src={ReactImg} alt="nodejs" /><span>React</span></li>
      <li className="itemskills"><img src={FirebaseImg} alt="nodejs" /><span>Firebase</span></li>
      <li className="itemskills"><img src={NodeImg} alt="nodejs" /><span>Node</span></li>

      {/* {skill.map(skill => (
        <>
          <li>{skill.nome}</li>
          <li>{skill.img}</li>
        </>
      ))} */}

    </ul>

  )
}

