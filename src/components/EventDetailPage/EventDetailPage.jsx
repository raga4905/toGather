import React from 'react';
import EventCard from '../../components/EventCard/EventCard';

function EventDetailPage(props) {
    // const event = props.location.state.event;
    return (
        <>
            <h1>Event Details</h1>
            <EventCard
                key={props.event._id}
                event={props.event}
            
            />
            
        </>
    );
}

export default EventDetailPage;