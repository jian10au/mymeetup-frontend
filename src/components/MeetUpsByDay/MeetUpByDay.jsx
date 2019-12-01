import React from 'react';
import '../MeetUpsByDay/MeetUpByDay.css'


const MeetUpByDay = (props) => {

    const {meetups} = props 

    let MeetUpList = null;

    if(meetups!==null) {
        MeetUpList = meetups.map(meetup => {
            return(
                <div className="event-container" key={meetup._id}>
                    <h3>Title:{meetup.description}</h3>
                    <p>Date:{meetup.date}</p>
                    <p>Description: {meetup.description}</p>
                    <p>Participants: {meetup.participants}</p>
                </div>
                    )
                }
                )
            }


    return meetups ? (
        <div className="meet-up-by-day-container">
           {MeetUpList}
        </div>
    ):<h1>Loading</h1>
}






export default MeetUpByDay