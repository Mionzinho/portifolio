import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu'

export default () => {
  const contato = useSelector(state => state.contato)

  return (
    <>
      <div className="container">
        <Menu></Menu>
        <ul>
          <li>{contato.nome}</li>
          <li>{contato.email}</li>
          <li>{contato.mensagem}</li>
        </ul>
      </div> 
    </>
    )
}

