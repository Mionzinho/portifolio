import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu'

const App = ({ projetos }) => {
  return ( 
    <>    
      <div className="container">
        <Menu></Menu>
      </div>
    </>
    )
}

const maps = state => ({
  projetos: state.projetos
})

export default connect(maps)(App)