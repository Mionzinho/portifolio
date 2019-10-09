import React from 'react'
// import { useSelector } from 'react-redux'

import SassImg from '../img/sass.png'
import FirebaseImg from '../img/firebase.png'
import NodeImg from '../img/node.png'

export default () => {
  // const projetos = useSelector(state => state.projetos)

  return (
    <>
      <ul className="listaroleta">
        <li className="itemprojetos"><img src={SassImg} alt="nodejs" /><span>Sass</span></li>
        {/* <li className="itemprojetos"><img src={FirebaseImg} alt="nodejs" /><span>Firebase</span></li>
        <li className="itemprojetos"><img src={NodeImg} alt="nodejs" /><span>Node</span></li>
         */}
        {/* {projetos.map(item => (
            <>
              <li>{item.foto}</li>
            </>
          ))} */}
      </ul>
    
    </>
  )
}