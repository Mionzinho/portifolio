import React from 'react'
import { useSelector } from 'react-redux'
import Botao from './Botao';

export default () => {
  const formulario = useSelector(state => state.formulario)
  
  return ( 
    <>    
      <div className="formulario">
        <ul>
          {formulario.map(form => (
          <>
            <form action="" method="post">
              <li><input className="texto" type="text" id="nome" placeholder="Nome"/></li>
              <li><input className="texto" type="email" id="email" placeholder="E-mail" /></li>
              <li><textarea className="texto" id="msg" placeholder="mensagem"></textarea></li>              
            </form>
          </>
          ))}
        <Botao></Botao>   
        </ul>    
      </div>      
    </>
  )
}
