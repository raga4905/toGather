import React from 'react';
import { Link } from 'react-router-dom';

function MyEventItem(props) {
    return (
        <div >
            <h2 >{props.myEvents.name}</h2>
            <img src="https://source.unsplash.com/collection/190727/100x100" alt="myEventsimg" />
            <h5> {props.myEvents.location}</h5>
            <h6>{props.myEvents.date}</h6>
            {/* <Link
                to={{
                    pathname: '/details',
                    state: { myEvents: props.myEvents }
                }}>
                DETAILS </Link> */}
            <button onClick={() => props.handleDeleteEvent(props.myEvents._id)}>
                DELETE
                </button>
        </div>
    );
}

export default MyEventItem;