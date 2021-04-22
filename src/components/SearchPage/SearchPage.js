import React,{Component} from 'react'
import './SearchPage.scss'
import './ChannelRow/ChannelRow';
import './VideoRow/VideoRow'

class SearchPage extends React.Component {
  render() {
    return(
      <div className="searchPage">
        <div className="searchPage__filter">
          <img></img>
          <h2>Filter</h2>
       </div>
       <hr />
       <ChannelRow />
       <ChannelRow />
       <ChannelRow />
       <VideoRow />
       <hr />
      </div>
    )
  }
}

export default SearchPage;