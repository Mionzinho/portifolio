
import React from 'react'
// import { useSelector } from 'react-redux'
import Menu from '../components/Menu'
import ListaProjetos from '../components/ListaProjetos'


export default () => {
  // const projetos = useSelector(state => state.projetos)

  return (
    <>
      <div className="container">
        <Menu></Menu>
        <h2 className="titulo-alternativo tituloProjeto">Meus Projetos</h2>  
        <ListaProjetos></ListaProjetos>
      </div>
    </>
  )
}