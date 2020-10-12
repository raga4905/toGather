import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as eventAPI from "../../services/events-api";
import EventListPage from "../../components/EventListPage/EventListPage"

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(), 
      events: []
    };
  }

  async componentDidMount() {
    const events = await eventAPI.getAll();
    this.setState({ events });
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  /*--- Lifecycle Methods ---*/
  render() {
    return (
      <div>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </Switch>
        <main>
            <EventListPage
              events={this.state.events}
            />
        </main>
      </div>
    );
  }
}
export default App;