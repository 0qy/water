import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Water from './Water'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/water' component={Water}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
