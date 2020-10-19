import React from 'react';
import { Link } from 'react-router-dom';
import "./MyEventItem.css";
import Moment from 'react-moment';


function MyEventItem(props) {
    return (
        <div >
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src="https://source.unsplash.com/collection/190727/autox400" alt="eventimg" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                    <h2 className="card-title">{props.myEvent.name}</h2>
                    <p className="card-text text-secondary">{props.myEvent.location}</p>
                    <div className="text-center">
                        <Moment local format="MM/DD/YY - hh:mm a">{props.myEvent.date}</Moment>
                    </div>
                    <button className="btn btn-outline-warning" onClick={() => props.handleDeleteEvent(props.myEvent._id)}>
                        DELETE
                </button> 
                &nbsp;&nbsp;
                    <Link
                        className='btn btn-xs btn-warning'
                        to={{
                            pathname: '/edit',
                            state: { event: props.myEvent }
                        }}
                    >
                        EDIT
            </Link>
                </div>
            </div>
        </div>
    );
}






export default MyEventItem;