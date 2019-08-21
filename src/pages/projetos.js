import React from 'react'
import { connect } from 'react-redux'
import Ola from '../components/Ola'
import Menu from '../components/Menu'

// import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
// 

const App = ({ projetos }) => {
  return ( 
    <>    
      <div className="container">
        <Menu></Menu>
        <Ola></Ola>
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

export default
connect({
  projetos: state.projetos
})(App)