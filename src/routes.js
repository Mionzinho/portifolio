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

const Routes = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/projetos' render={() => <Projetos />} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
