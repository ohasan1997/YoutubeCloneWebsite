import React from 'react';
import {Component} from 'react';
import './Sidebar.scss'
import SidebarRow from './SidebarRow/SidebarRow'
// import MenuIcon from './images/MenuIcon.png';
import HomeIcon from '/src/images/HomeIcon.png'
import ExploreIcon from '/src/images/ExploreIcon.PNG'
import SubscriptionsIcon from '/src/images/SubscriptionIcon.png'
import VideoLibrary from '/src/images/VideoLibrary.PNG'
import HistoryIcon from '/src/images/HistoryIcon.PNG'
import WatchLaterIcon from '/src/images/WatchLater.png'
import LikeIcon from '/src/images/LikeIcon.jpg'
import PlaylistIcon from '/src/images/PlaylistIcon.png'
import ExpandMore from '/src/images/ExpandMore.png'




class Sidebar extends React.Component {

  
  render()
  {
    return(
      <div class="sidebar">
        <SidebarRow selected src={HomeIcon} title="Home"/>
        <SidebarRow src={ExploreIcon} title="Explore"/>
        <SidebarRow src={SubscriptionsIcon} title="Subscription"/>
        <hr />
        <SidebarRow src={VideoLibrary} title="Library"/>
        <SidebarRow src={HistoryIcon} title="History"/> 
        <SidebarRow src={WatchLaterIcon} title="Watch later"/>
        <SidebarRow src={LikeIcon} title="Liked Videos"/>
        <SidebarRow src={PlaylistIcon} title="Playlist"/>
        <SidebarRow src={ExpandMore} title="Show More"/>
        <hr />                                                                                                                                                                                        
      </div>
    )
  }
}

export default Sidebar;
