import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu'

export default () => {
  const projetos = useSelector(state => state.projetos)
  
  return ( 
    <>    
      <div className="container">
        <Menu></Menu>
        <div className="souweb">
          <h3 className="texto">PROJETOS</h3>
          <ul>
            {projetos.map(item => (
              <>
                <li>{item.nome}</li>
                <li>{item.foto}</li>
                <li>{item.link}</li>
              </>
            ))}
          </ul>         
        </div>
      </div> 
    </>
  )
}