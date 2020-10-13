import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as eventAPI from "../../services/events-api";
import EventListPage from "../../components/EventListPage/EventListPage"; 
import AddEventPage from "../AddEventPage/AddEventPage"

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(), 
      events: [], 
      host: ""
    };
  }

  async componentDidMount() {
    const events = await eventAPI.getAll();
    this.setState({ events });
    console.log(events)
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleAddEvent = async newEventData => {
    const newEvent = await eventAPI.create(newEventData);
    this.setState(state => ({
      events: [...state.events, newEvent]
    }), 
    () => this.props.history.push(''))
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
          <Route exact path='/add' render={() => 
            <AddEventPage
              handleAddEvent={this.handleAddEvent}
            />
          } />
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
              user={this.state.user}
            />
        </main>
      </div>
    );
  }
}
export default App;