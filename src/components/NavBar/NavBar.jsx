import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div className="navbar">
            <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/add' className='NavBar-link'>Add an Event</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/myevents' className='NavBar-link'>My Events</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <form className="SearchBar">
                <input type="text" placeholder="SEARCH" />
            </form>
        </div>
        :
        <div className="navbar">
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};





export default NavBar;


