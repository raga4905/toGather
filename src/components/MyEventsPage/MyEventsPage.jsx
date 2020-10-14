import React from "react";
import MyEventItem from "../MyEventItem/MyEventItem";


function MyEventPage(props) {
    return (
        <>
            <div >
                {props.myEvents.map(myEvent => (
                    <MyEventItem 
                    myEvent={myEvent} 
                    key={myEvent._id} 
                    handleDeleteEvent={props.handleDeleteEvent}/>
                ))}
            </div>
        </>
    );
}


export default MyEventPage;
