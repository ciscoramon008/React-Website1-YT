import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import './App.css'

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
    </Switch>
  )
}

export default App