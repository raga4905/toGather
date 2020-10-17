import React, { useState } from "react";
import "./EventListPage.css";
import EventListItem from "../EventListItem/EventListItem";
import Modal from 'react-modal';
import EventDetailPage from "../EventDetailPage/EventDetailPage";

Modal.setAppElement('#root')
function EventListPage(props) {
    let events = props.user ?
        <div>
            <>
                <br /><br />
                <h1 className="text-center">Happening soon</h1>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        {props.events.map(event => (
                            <EventListItem
                                event={event}
                                key={event._id}
                                user={props.user}
                            />
                        ))}
                    </div>
                </div>
            </>
        </div>
        :
        <div>
            <div>Sign in! Look how cool:</div>
            
    </div>
    return (
        <>
            <div>{events}</div>
        </>


    )
}

export default EventListPage;

