import React from 'react';
import {Component} from 'react';
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
import ChannelPage from './images/class_img.jfif'
import YoutubeImage from './images/YoutubeIcon.png'



class RecommendedVideos extends React.Component {

  constructor(props) {
    super(props);
    // const {this.img,this.title,channel,views,timestamp,}
    
   }

  render()
  {
    return(
      <div class="recommendedVideos">
        <h2>Recommended</h2>
        <div class="Videos">
          <VideoCard 
          image = {ChannelPage}
          title = "Classroom Video 2019/2020"
          channel = "Youtube Videos"
          views = "2.3M Views"
          timestamp = "3 days ago"
          channelImage = {YoutubeImage}         
          />

        <VideoCard 
          image = {ChannelPage}
          title = "Classroom Video 2019/2020"
          channel = "Youtube Videos"
          views = "1.9M Views"
          timestamp = "1 month ago"
          channelImage = {YoutubeImage}         
          />


         <VideoCard 
          image = {ChannelPage}
          title = "Classroom Video 2019/2020"
          channel = "Youtube Videos"
          views = "2.3M Views"
          timestamp = "3 days ago"
          channelImage = {YoutubeImage}         
          />

         <VideoCard 
          image = {ChannelPage}
          title = "Classroom Video 2019/2020"
          channel = "Youtube Videos"
          views = "2.3M Views"
          timestamp = "3 days ago"
          channelImage = {YoutubeImage}         
          />

         <VideoCard 
          image = {ChannelPage}
          title = "Classroom Video 2019/2020"
          channel = "Youtube Videos"
          views = "2.3M Views"
          timestamp = "3 days ago"
          channelImage = {YoutubeImage}         
          />
        </div>
      </div>
    )
  }
}



export default RecommendedVideos;
