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
        // <div className="card text-center shadow">
        //     <div className="overflow">
        //         <img src="https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="eventimg" className="card-img-top" />
        //         {/* <img src="{props.event.img}" alt="image" className="card-img-top"/>
        //         <h2>{props.event.img}</h2> */}
        //     </div>
        //     <h2 className="card-title bg-dark text-white">{props.event.name}</h2>
        //     <div className="card-body">
        //         {/* <p className="card-text text-secondary">{props.event.location}</p> */}
        //         <p className="card-text text-secondary">{props.event.user.name}</p>
        //         <p className="card-text text-secondary">{props.event.date}</p>
        //         <button class="btn btn-info"  onClick={() => setModalIsOpen(true)}>Details</button>
        //         <Modal class="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={
        //             {
        //                 overlay: {
        //                     backgroundColor: 'grey'
        //                 },
        //                 content: {
        //                     color: "orange"
        //                 }
        //             }
        //         }>
        //             <EventDetailPage
        //             event={props.event}
        //             />
        //             <div>
        //                 <button className="btn btn-outline-success" onClick={() => setModalIsOpen(false)}>Close</button>
        //             </div>
        //         </Modal>

        //     </div>
        // </div> className="text-center"
        <div class="hexagon" style={{backgroundImage:`url(${props.event.img})`}}>
            <h2 className="text">{props.event.name}</h2>
            <p className="text">Hosted by: {props.event.user.name}</p>
            <p className="text">{props.event.date}</p>
            <div className="text-center">
                <button class="btn btn-warning" onClick={() => setModalIsOpen(true)}>Details</button>
            </div>
            
            <Modal class="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={
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
                    event={props.event}
                    // event={props.event._id}
                />
                <div className="text-center">
                    <button className="btn btn-outline-success " onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    );
}



export default EventListItem;