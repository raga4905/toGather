import React from 'react';
import './EventCard.css';
import Moment from 'react-moment';

function EventCard({ event }) {
    return (
        <div >
            <div className="text-center">
                <div className="overflow" >
                </div>
                <div className="card-body text-dark" >
                    <h2 className="card-title">What?<br />{event.name}</h2>
                    <p>Hosting? {event.user.name}</p>
                    <p className="card-text text-secondary">When? <br /><Moment local format="MM/DD/YY - hh:mm a">{event.date}</Moment></p>
                    <p className="card-text text-secondary">Where? <br /> {event.location}</p>
                    <p className="card-text text-secondary">Why? <br />{event.description}</p>
                    <button className="btn btn-outline-success"> Join </button>
                &nbsp;&nbsp;
                </div>
            </div>
        </div>

    );
}

export default EventCard;