import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import './EventDetailPage.css'

function EventDetailPage(props) {
    // const event = props.location.state.event;
    return (
        <div className="text-center">
            <h1>Event Details</h1>
            <EventCard
                key={props.event._id}
                event={props.event}
            
            />
            
        </div>
    );
}

export default EventDetailPage;