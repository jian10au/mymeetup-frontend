import React, {Component} from 'react';
import MeetUpLogoAndNavBar from '../../components/MeetUpLogoAndNavBar/MeetUpLogoAndNavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import MeetUpByDay from '../../components/MeetUpsByDay/MeetUpByDay'
import '../MeetupIndex/MeetupIndex.css'
import SiteMap from '../../components/SiteMap/SiteMap'
import axios from 'axios'

class MeetupIndex extends Component {

    state = {meetups:null}

    // async componentDidMount() {
    //     let result = axios.get()
    // }
    
    async componentDidMount() {
        const {data} = await axios.get('http://localhost:5000/meetups')
        this.setState({
            meetups:data
        })
    }


    render(){
        
        return(
            <>
            <MeetUpLogoAndNavBar />
            <SearchBar />
            <MeetUpByDay meetups={this.state.meetups}/>
            <SiteMap />
            </>
        )
    }
}





export default MeetupIndex

