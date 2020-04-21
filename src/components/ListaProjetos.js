import React from 'react'

import portifa from '../img/portifa.PNG'
import poly from '../img/poly.PNG'


export default () => {

  return (
    <>
      <ul className="listaProjeto">
        <li className="itemProjetos"><img src={portifa} alt="este site"/></li>
        <li className="itemProjetos"><a href="https://polyservicos.com.br" target="https://polyservicos.com.br/"><img src={poly} alt="poly servicos" /></a></li>
      </ul>
    
    </>
  )
}