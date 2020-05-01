import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import Water from './Water'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/water' component={Water}/>
          <Redirect path="/" to="/water"/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
