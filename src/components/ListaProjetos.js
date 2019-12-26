import React from 'react'
// import { useSelector } from 'react-redux'

import portifa from '../img/portifa.PNG'
import poly from '../img/poly.PNG'

export default () => {
  // const projetos = useSelector(state => state.projetos)

  return (
    <>
      <ul className="listaProjeto">
        <li className="itemProjetos"><a href="#"><img src={portifa} alt="este site"/></a></li>
        <li className="itemProjetos"><a href="#"><img src={poly} alt="nodejs" /></a></li>
      </ul>
    
    </>
  )
}