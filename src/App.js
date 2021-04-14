import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation'
import routes from './routes'


function App(props) {
  return (
    <Router>
      <Navigation />
      <Switch>
        {routes.map((entry, index) => (<Route {...entry} {...props} key={index} />))}
      </Switch>
    </Router>
  )
}

export default App;
