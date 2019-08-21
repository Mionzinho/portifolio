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
          <p className="texto">Sou um <b>Web Developer</b>, amante do <b>automobilismo</b>,<br></br>
                              praticante de <b>musculação</b> e <b>positivista</b> movido a<br></br>
                              café e resiliência.</p>
          <h3 className="texto"><a href="#">VEJA MEUS PROJETOS</a></h3>           
        </div>
      </div> 
    </>
    )
}

export default App
