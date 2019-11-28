import React from 'react'
import '../SiteMap/SiteMap.css'

const SiteMap = () => {
    return(
        <div className="site-map">
            <ol>
                <p>Your Account</p>
                <a href="/">Signup</a>
                <a href="/">Login</a>
                <a href="/">Help</a>
            </ol>

            <ol>
                <p>Discover</p>
                <a href="/">Groups</a>
                <a href="/">Calendar</a>
                <a href="/">Topics</a>
                <a href="/">Cities</a>
            </ol>

            <ol>
                <p >Meetup</p>
                <a href="/">About Meetup</a>
                <a href="/">Meetup Pro</a>
                <a href="/">Jobs</a>
                <a href="/">Apps</a>
                <a href="/">Api</a>
                <a href="/">Accessibility</a>
            </ol>
        </div>
        )
}

export default SiteMap