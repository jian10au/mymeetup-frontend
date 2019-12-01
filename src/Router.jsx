import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import MeetupIndex from './pages/MeetupIndex/MeetupIndex'
import GroupsIndex from './pages/GroupsIndex/GroupsIndex'
import GroupCatsIndex from './pages/GroupCatsIndex/GroupCatsIndex'

const Router = () => {

    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/meetups" component={MeetupIndex} />
            <Route exact path="/groups" component={GroupsIndex} />
            <Route exact path="/categories" component={GroupCatsIndex} />

            {/* you can pass props through */}
        </Switch>

    )
}

export default Router