import React from 'react';
import { Link } from 'react-router-dom';
import './EventListItem.css';

function EventListItem(props) {
    return (
        <div >
                <h2 >{props.event.name}</h2>
                <img src="https://source.unsplash.com/collection/190727/100x100" alt="eventimg"/>
                <h5> {props.event.location}</h5>
                <h6>{props.event.date}</h6>
            <Link
                to={{
                    pathname: '/details',
                    state: { event: props.event }
                }}>
                DETAILS </Link>
                <button onClick={() => props.handleDeleteEvent(props.event._id)}>
                    DELETE
                </button>
        </div>
    );
}

export default EventListItem;