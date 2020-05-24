import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import LoadingBar from 'react-redux-loading-bar'
import Poll from './Poll'
import PollResult from './PollResult'
import Login from './Login'
import Nav from './Nav'
import PrivateRoute from './PrivateRoute'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            <Switch>
              <PrivateRoute path='/home' authedUser={authedUser} component={Dashboard} />
              <PrivateRoute path='/leaderboard' authedUser={authedUser} component={LeaderBoard} />}.
              <PrivateRoute path='/poll/:id' authedUser={authedUser} component={Poll} />}
              <PrivateRoute path='/new' authedUser={authedUser} component={NewQuestion} />}
              <PrivateRoute path='/pollresult/:id' authedUser={authedUser} component={PollResult} />}
              <PrivateRoute path='/pollresult' authedUser={authedUser} component={PollResult} />}
              <Route path='/' component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  authedUser = authedUser ? Object.values(authedUser)[0] : authedUser
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)