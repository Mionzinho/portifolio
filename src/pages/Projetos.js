import React from 'react'
import Menu from '../components/Menu'
import ListaProjetos from '../components/ListaProjetos'

export default function projetos() {

  return (
    <div className="container wrapper-projetos">
      <h2 className="titulo title-projetos">Projetos</h2>
      <ListaProjetos />
      <Menu />
    </div>
  )
}