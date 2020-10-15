import React from 'react';
import { Link } from 'react-router-dom';
import './EventListItem.css';
import { ThemeProvider } from 'react-bootstrap';

function EventListItem(props) {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src="https://source.unsplash.com/collection/190727/autox400" alt="eventimg" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h2 className="card-title">{props.event.name}</h2>
                <p className="card-text text-secondary">{props.event.location}</p>
                <p className="card-text text-secondary">{props.event.date}</p>
                <p className="card-text text-secondary">{props.event.user.name}</p>
                {/* added below */}
                {/* <button onClick={ThemeProvider.displayEvent}></button> */}
                {/* added above */}
                <Link className="btn btn-outline-success"
                    to={{
                        pathname: '/details',
                        state: { event: props.event }
                    }}>
                    DETAILS </Link>
                    {/* <button onClick={ () => props.handleDisplayEvent(props.event)}></button> */}
            </div>
        </div>
    );
}

export default EventListItem;