import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Header}/>
      <Route path='/' component={Footer}/>
    </Router>
  )
}

export default App
