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
                    {event.img}
                    <dt>Description</dt>
                    <dd>{event.description}</dd>
                    <dt>Name</dt>
                    <dd>{event.name}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link to='/'>RETURN TO LIST</Link>
            </div>
        </div>
    );
}

export default EventCard;