import React from 'react';
import { Link, Form } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div id="nav" className="navbar bg-white">
    <br/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/' className='NavBar-link text-info' style={{ color: "green" }}>Explore</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/add' className='NavBar-link text-info' style={{ color: "green" }}>Add an Event</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/myevents' className='NavBar-link text-info' style={{ color: "green" }}>My Events</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             {/* <form className="SearchBar ">
                <input type="text" placeholder="(You can't search yet)" />
            </form> */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout} ><span className='NavBar-welcome text-dark'>WELCOME, <span class="font-weight-bold ">{props.user.name}</span>!</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-info'>LOG OUT</span></Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        :
        <div className="navbar">
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/login' className='NavBar-link' style={{ color: "green" }}>LOG IN</Link>
            <Link to='/signup' className='NavBar-link' style={{ color: "green" }}>SIGN UP</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

{/* <Navbar bg="light" expand="lg">
    <Navbar.Brand>WELCOME, {props.user.name}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link to='/add' className='NavBar-link text-info' >Add an Event</Nav.Link>
            <Nav.Link to='/myevents' className='NavBar-link text-info'>My Events</Nav.Link>
            :
            <Nav.Link to='/login' className='NavBar-link'>LOG IN</Nav.Link>
            <Nav.Link to='/signup' className='NavBar-link'>SIGN UP</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
</Navbar> */}



export default NavBar;


