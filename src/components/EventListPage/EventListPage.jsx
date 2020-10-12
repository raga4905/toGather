import React from "react";
import "./EventListPage.css";
import EventListItem from "../EventListItem/EventListItem";

function EventListPage(props) {
    return (
        <>
            <h1>Happening soon</h1>
            <div >
                {props.events.map(event => (
                    <EventListItem event={event} key={event._id} />
                ))}
            </div>
        </>
    );
}

export default EventListPage;