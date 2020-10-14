import React from "react";
import MyEventItem from "../MyEventItem/MyEventItem";


function MyEventPage(props) {
    return (
        <>
            <div >
                {props.myEvents.map(myEvents => (
                    <MyEventItem myEvents={myEvents} key={myEvents._id} handleDeleteEvent={props.handleDeleteEvent}/>
                ))}
            </div>
        </>
    );
}


export default MyEventPage;
