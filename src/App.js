import './App.css'
import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'

import Menu from './components/Menu/Menu'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Menu />

          {/* Start route */}
          <Switch>
            { this.RouteComponent }
          </Switch>
          {/* End route */}
        </div>
      </Router>
    )
  }

  RouteComponent = routes.map((route, index) => {
    return(
      <Route key={ index } exact={ route.exact } path={ route.path } component={ route.main } />
    )
  })
}
