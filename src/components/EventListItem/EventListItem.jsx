import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './EventListItem.css';
import Modal from "react-modal";
import EventDetailPage from "../EventDetailPage/EventDetailPage"
// import { ThemeProvider } from 'react-bootstrap';

// export default class EventListItem extends React.Component {
//     render() {
        
//     }
// }

function EventListItem(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        
        <div className="card text-center shadow">
            <div className="overflow">
                <img src="https://source.unsplash.com/random/autox400" alt="eventimg" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h2 className="card-title">{props.event.name}</h2>
                <p className="card-text text-secondary">{props.event.location}</p>
                <p className="card-text text-secondary">{props.event.date}</p>
                <p className="card-text text-secondary">{props.event.user.name}</p>

                    {/* <Link className="btn btn-outline-success"
                    to={{
                        pathname: '/details',
                        state: { event: props.event }
                    }}>
                    DETAILS </Link> */}
                
                
                    {/* <button onClick={ () => props.handleDisplayEvent(props.event)}></button> */}
                <button className="btn btn-outline-success" onClick={() => setModalIsOpen(true)}>Details</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={
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
                    event={props.event}
                    />
                    <div>
                        <button className="btn btn-outline-success" onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>
                </Modal>

            </div>
        </div>
    );
}

export default EventListItem;