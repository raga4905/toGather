import React from 'react';
// import { Link } from 'react-router-dom';
import './EventListItem.css';

function EventListItem(props) {
    return (
        <div >
                <h2 >{props.event.name}</h2>
                <h5> {props.event.location}</h5>
        </div>
    );
}

export default EventListItem;