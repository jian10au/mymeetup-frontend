import React from 'react'
import MeetUpLogo from '../MeetUpLogo/MeetUpLogo.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import '../MeetUpLogoAndNavBar/MeetUpLogoAndNavBar.css'

const LogoAndNavBar = () => {

    return(
      <div className="LogoAndNav">
          <MeetUpLogo />
          <NavBar />
      </div>
    )
}


export default LogoAndNavBar