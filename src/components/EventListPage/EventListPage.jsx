import React from "react";
import "./EventListPage.css";
import EventListItem from "../EventListItem/EventListItem";
import Modal from 'react-modal';

Modal.setAppElement('#root')
function EventListPage(props) {
    let events = props.user ?
        <div className="hive">
            <>
                <br />
                <h1 className="text-center" style={{ color: 'white', textShadow: '2px 2px rgb(69, 67, 64)'}}>Happening soon</h1>
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
        <div className="text-center" style={{ backgroundColor: 'white' }}>
            <br/>
            <h1> Welcome to ToGather! </h1>
            <br/>
            <p>We know you're a busy bee. Ease your event planning with ToGather!</p>
            <br />
            <img class="info" src="https://i.imgur.com/4gcAM7Z.png" alt="info"/>
        </div>
    return (
        <>
            <div>{events}</div>
        </>


    )
}

export default EventListPage;

