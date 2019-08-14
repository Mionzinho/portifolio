import React from 'react'
import Ola from '../components/Ola'
import Menu from '../components/Menu'

// import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
// 

const App = () => {
  return (
    <>
      <div className="container">
        <Menu></Menu>
        <Ola></Ola>
        <div className="souweb">
          <h3 className="texto">PROJETOS</h3>           
        </div>
      </div> 
    </>
    )
}

export default App
