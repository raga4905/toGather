import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard({ event }) {
    return (
        <div >
            <div className="text-center">
                <div className="overflow" >
                    {/* <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="eventimg" className="card-img-top" /> */}
                </div>
                <div className="card-body text-dark" >
                    <h2 className="card-title">What?<br />{event.name}</h2>
                    <p>Hosting? {event.user.name}</p>
                    <p className="card-text text-secondary">When? <br /> {event.date}</p>
                    <p className="card-text text-secondary">Where? <br /> {event.location}</p>
                    <p className="card-text text-secondary">Why? <br />{event.description}</p>
                    {/* <p className="card-text text-secondary">{props.user.name}</p> */}
                    <button className="btn btn-outline-success">Sign Up </button>
                &nbsp;&nbsp;
                </div>
            </div>
        </div>

    );
}

export default EventCard;