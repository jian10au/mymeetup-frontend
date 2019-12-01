import React from 'react'
import "../EventsNear/EventsNear.css"
import {NavLink} from 'react-router-dom'

const EventsNear = () => {

    return(
        <div className="events-near">
            <NavLink className='links' to='/meetups'><h3>Events near you</h3></NavLink>
            <ul>
                <li>Event1</li>
                <li>Event2</li>
                <li>Event3</li>
            </ul>
        </div>
    )
}


export default EventsNear
