import React from "react";
import MyEventItem from "../MyEventItem/MyEventItem";
import { Link } from 'react-router-dom';


function MyEventPage(props) {
    return (
            <div className="container-fluid d-flex justify-content-center">
                <div >
                <h1>My Events</h1>
                <div className="row">
                    {props.myEvents.map(myEvent => (
                    <MyEventItem 
                    myEvent={myEvent} 
                    key={myEvent._id} 
                    handleDeleteEvent={props.handleDeleteEvent}/>
                ))}
                </div>
                <div >
                    <Link to='/'>RETURN TO LIST</Link>
                </div>
            </div>
        </div>
    );
}


export default MyEventPage;
