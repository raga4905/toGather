import React from 'react';
import { Link } from 'react-router-dom';
import "./MyEventItem.css";


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
                    <p className="card-text text-secondary">{props.myEvent.date}</p>
                    {/* <p className="card-text text-secondary">{props.user.name}</p> */}
                    <button onClick={() => props.handleDeleteEvent(props.myEvent._id)}>
                        DELETE
                </button>
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

            {/* <h2 >{props.myEvent.name}</h2>
            <img src="https://source.unsplash.com/collection/190727/100x100" alt="myEventsimg" />
            <h5> {props.myEvent.location}</h5>
            <h6>{props.myEvent.date}</h6> */}
            
            <div >
                <Link to='/'>RETURN TO LIST</Link>
            </div>
        </div>
    );
}






export default MyEventItem;