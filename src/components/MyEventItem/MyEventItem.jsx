import React from 'react';
import { Link } from 'react-router-dom';
import "./MyEventItem.css";


function MyEventItem(props) {
    return (
        <div >
            <h2 >{props.myEvent.name}</h2>
            <img src="https://source.unsplash.com/collection/190727/100x100" alt="myEventsimg" />
            <h5> {props.myEvent.location}</h5>
            <h6>{props.myEvent.date}</h6>
            {/* <Link
                to={{
                    pathname: '/details',
                    state: { myEvents: props.myEvents }
                }}>
                DETAILS </Link> */}
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
            <div className='panel-footer'>
                <Link to='/'>RETURN TO LIST</Link>
            </div>
        </div>
    );
}

export default MyEventItem;