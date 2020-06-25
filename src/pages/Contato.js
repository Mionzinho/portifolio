import React from 'react'
import Menu from '../components/Menu'
import Formulario from '../components/Formulario';
import Pessoais from '../components/Pessoais';

export default function contato() {
  return (
    <div className="container-contato">
      <Menu />
      <div className="conteudo-contato">
        <Pessoais />
        <Formulario />
      </div>
    </div>
  )
}

