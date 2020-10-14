import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as eventAPI from "../../services/events-api";
import EventListPage from "../../components/EventListPage/EventListPage"; 
import AddEventPage from "../AddEventPage/AddEventPage";
import EventDetailPage from "../../components/EventDetailPage/EventDetailPage";
import MyEventsPage from "../../components/MyEventsPage/MyEventsPage"

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(), 
      events: [], 
      host: "",
      myEvents: []
    };
  }

  async componentDidMount() {
    const events = await eventAPI.getAll();
    console.log("HI THERE", events)
    const myEvents = await eventAPI.getMyEvents();
    console.log("BOO", myEvents)
    this.setState({ 
      events: events, 
      myEvents: myEvents   
    });
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
      events: [...state.events, newEvent],
      myEvents: [...state.myEvents, newEvent]
    }), 
    () => this.props.history.push(''))
  }

  handleDeleteEvent= async id => {
    await eventAPI.deleteOne(id);
    this.setState(state => ({
      events: state.events.filter(e => e._id !== id), 
      myEvents: []
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
          <Route exact path='/add' render={({ location }) => 
            <AddEventPage
              handleAddEvent={this.handleAddEvent} location={location}
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
          <Route exact path='/details' render={({ location }) =>
            <EventDetailPage location={location} />
          } />
          <Route exact path='/myevents' render={({ location }) =>
            <MyEventsPage location={location} myEvents={this.state.myEvents} handleDeleteEvent={this.handleDeleteEvent}/>
          } />
        </Switch>
        <main>
            <EventListPage
              events={this.state.events}
              user={this.state.user}
              handleDeleteEvent={this.handleDeleteEvent}
            />
        </main>
      </div>
    );
  }
}
export default App;