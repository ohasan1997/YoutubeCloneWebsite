import React, { useState } from 'react'
import './VideoRow.scss'

function VideoRow(props) {
  const [views,subs,description, timeStamp, channel, title,image] = useState(this.props);

  return <div className="videoRow">
    <img src={image}></img>
    <div className="videoRow__text">
      <h3>{title}</h3>
      <p className="videoRow__headline">{channel} • 
      <span className="videoRowsubs">
      <span className="videoRow__subsnumber">
      {subs}
      </span>
      </span> Subscribers {views} views • {timeStamp}</p>
      <p className="videoRow__description">{description}</p>
    </div>
  </div>
}

export default VideoRow