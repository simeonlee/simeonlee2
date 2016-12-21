import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import RouterContainer from './RouterContainer'
import Home from './Home'
import Journal from './journal/Journal'
import Dashboard from './dashboard/Dashboard'
import Profile from './user/Profile'
import { authenticateUser, checkIfLoggedIn } from '../utils'
import axios from 'axios'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    axios.get('/auth')
      .then((res) => {
        if (!res.data) {
          this.setState({loggedIn: false});
        } else {
          this.setState({loggedIn: true});
        }
      })
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={RouterContainer}>
            <IndexRoute component={Home}/>
            <Route path="/journal" component={Journal} onEnter={authenticateUser}/>
            <Route path="/dashboard" component={Dashboard} onEnter={authenticateUser}/>
            <Route path="/profile" component={Profile} onEnter={authenticateUser}/>
          </Route>
        </Router>
      </div>
    )
  }
}