import React from 'react'
import '../GroupsNear/GroupsNear.css'
import {NavLink} from 'react-router-dom'

const GroupsNear = () => {

    return(
        <div className="groups-near">
            <NavLink className='links' to='/groups'><h3>Groups Near You</h3></NavLink>
            <ul>
                <li>Group 1</li>
                <li>Group 2</li>
                <li>Group 3</li>
            </ul>
        </div>
    )
}


export default GroupsNear