import React from 'react';
import {Component} from 'react';
import './VideoCard.css'


class VideoCard extends React.Component {
  
  constructor(props) {
    super(props);
    image = props.image;
    title = props.title;
    channel = props.channel;
    views = props.views;
    timestamp = props.timestamp;
    channelImage = props.channelImage;
  }
  

  render()
  {
    return(
      <div class="videoCard">
        <img src={image} alt="" class="thumbnail"/>
        <div class="video_info">
          <img src={image} alt="" class="channelImage"/>
          <div class="title">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
            {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoCard;
