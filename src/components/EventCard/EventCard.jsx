import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{event.name}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <img src="https://source.unsplash.com/collection/190727/100x100" alt="myEventsimg" />
                    <dt>Description</dt>
                    <dd>{event.description}</dd>
                </dl>
                <button className="btn btn-outline-success">Sign Up </button>
            </div>
            {/* <div className='panel-footer'>
                <Link to='/'>RETURN TO LIST</Link>
            </div> */}
        </div>
    );
}

export default EventCard;