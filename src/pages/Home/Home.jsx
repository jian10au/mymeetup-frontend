import React from 'react';
import MeetUpLogo from '../../components/MeetUpLogoAndNavBar/MeetUpLogoAndNavBar'
import NavBar from '../../components/NavBar/NavBar'
import HeadPart from '../../components/HeaderPart/HeaderPart'
import EventsNear from '../../components/EventsNear/EventsNear'
import GroupsNear from '../../components/GroupsNear/GroupsNear'
import CategoriesNear from '../../components/CategoriesNear/CategoriesNear'
import Faq from '../../components/Faq/Faq'
import SiteMap from '../../components/SiteMap/SiteMap'
import LogoAndNavBar from '../../components/MeetUpLogoAndNavBar/MeetUpLogoAndNavBar'

const Home = () => {
  return (
    <div className="App">
      <LogoAndNavBar />
      <HeadPart />
      <EventsNear />
      <GroupsNear />
      <CategoriesNear />
      <Faq />
      <SiteMap />
   
    </div>
  );
}

export default Home;
