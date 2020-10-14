import React from 'react';
import EventCard from '../../components/EventCard/EventCard';

function EventDetailPage(props) {
    const event = props.location.state.event;
    return (
        <>
            <h1>Event Details</h1>
            <EventCard
                key={event._id}
                event={event}
            />
        </>
    );
}
export default EventDetailPage;