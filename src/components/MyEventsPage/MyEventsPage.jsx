import React from "react";
import MyEventItem from "../MyEventItem/MyEventItem";


function MyEventPage(props) {
    return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <h1>My Events</h1><br/>
                {props.myEvents.map(myEvent => (
                    <MyEventItem 
                    myEvent={myEvent} 
                    key={myEvent._id} 
                    handleDeleteEvent={props.handleDeleteEvent}/>
                ))}
            </div>
        </div>
    );
}


export default MyEventPage;
