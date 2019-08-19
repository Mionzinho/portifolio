import React from 'react'
import History from './helpers/History'
import {
    Route,
    Router,
    Switch,
    Redirect,
} from 'react-router-dom'

// Paginas
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Skill from './pages/Skill'
import Contato from './pages/Contato'

const Routes = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/Projetos' render={() => <Projetos />} />
        <Route exact path='/Skill' render={() => <Skill />} />
        <Route exact path='/Contato' render={() => <Contato />} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
