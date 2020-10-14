import React from "react";
import "./EventListPage.css";
import EventListItem from "../EventListItem/EventListItem";
// import user from "../../../models/user";

// const EventListPage = (props) => {
//     let events = props.user ? 
//     <div>
//         <>
//         <h1>Happening soon</h1>
//         <div>
//                 {props.events.map(event => (
//                     <EventListItem event={event} key={event._id}/>
//                 ))}
//         </div>
//         </>
//     </div>
//     : 
//     <div>
//         No User Logged In 
//     </div>

//     return (

//         <div>{events}</div>
//     )
// }

// function EventListPage(props) {
//     return (
//         <>
//             <h1>Happening soon</h1>
//             <div >
//                 {props.events.map(event => (
//                     <EventListItem event={event} key={event._id} />
//                 ))}
//             </div>
//         </>
//     );
// }

function EventListPage(props) {
    let events = props.user ?
        <div>
            <>
            <br/><br/>
                <h1>Happening soon</h1>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                            {props.events.map(event => (
                        <EventListItem 
                                    event={event} 
                                    key={event._id} 
                                    handleDisplayEvent={props.handleDisplayEvent}
                        // handleDeleteEvent={props.handleDeleteEvent}
                                /> 
                            ))} 
                    </div>
                </div>
            </>
        </div>
        :
        <div>
            No User Logged In
    </div>

    return (

        <div>{events}</div>
    )
}

export default EventListPage;

