import React,{Component} from 'react'
import './ChannelRow.scss'

class ChannelRow extends React.Component {

  constructor() {
    super(props);
    image=props.image;
    channel = props.channel;
    subs = props.subs;
    noOfVideos = props.description;
    verified = props.verified;
  }

  render() {
    return(
      <div className="channelRow">
        <img 
        src={image} 
        alt={channel}
        className="channelRow_logo"></img>
        <div className="channelRow__text">
          <h4>{channel}{verified && 
          <img className="verified_icon"></img>
          }</h4>
          <p>{subs} subscribers • {noOfVideos} videos</p>
          <p>{description}</p>
        </div>

      </div>
    )
  }
}

export default ChannelRow;