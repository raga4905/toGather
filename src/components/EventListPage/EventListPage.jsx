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
                <br />
                <h1 className="text-center">Happening soon</h1>
                <br />
                <ul id="grid" class="clear">
                    {props.events.map(event => (
                        <li>
                            <EventListItem
                                event={event}
                                key={event.id}
                                user={props.user}
                            />
                        </li>
                    ))}
                </ul>
            </>
        </div>
        :
        // <div>
        //     <h1>hi</h1>
        // </div>
        <div className="text-center">
            <img class="logo" src="https://i.imgur.com/6HFvulI.png" alt="logo" />
            <div >We know you're a busy bee! Sign up with ToGather to organize your events with ease. </div>
            <br />
        </div>
    return (
        <>
            <div>{events}</div>
        </>


    )
}

export default EventListPage;

