import React, { useState } from "react";
import "./EventListPage.css";
import EventListItem from "../EventListItem/EventListItem";
import Modal from 'react-modal';
import EventDetailPage from "../EventDetailPage/EventDetailPage";

Modal.setAppElement('#root')
function EventListPage(props) {
    // const [modalIsOpen, setModalIsOpen] = useState(false)
    let events = props.user ?
        <div>
            <>
                <br /><br />
                <h1>Happening soon</h1>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        {props.events.map(event => (
                            <EventListItem
                                event={event}
                                key={event._id}
                                user={props.user}
                                // open={setModalIsOpen}
                            />
                        ))}
                        {/* <EventDetailPage/>  */}



                    </div>
                </div>
            </>
        </div>
        :
        <div>
            No User Logged In
    </div>
    return (
        <>
            <div>{events}</div>
            {/* <button onClick={() => setModalIsOpen(true)}>Details</button> */}
            {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={
                {
                    overlay: {
                        backgroundColor: 'grey'
                    }, 
                    content: {
                        color: "orange"
                    }
                }
            }>
                <EventDetailPage
                
                // // location={location}
                // event={this.state.events}
                />
                <div>
                    <button className="btn btn-outline-success" onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal> */}
        </>


    )
}

export default EventListPage;

