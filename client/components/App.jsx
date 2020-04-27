import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
