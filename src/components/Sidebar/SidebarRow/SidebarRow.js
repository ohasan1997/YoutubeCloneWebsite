import React from 'react';
import {Component} from 'react';
import './SidebarRow.scss'

class SidebarRow extends React.Component {

  constructor(props) {
   super(props);
  //  const {selected,src,title} = props;
   this.selected = props.selected;
   this.src = props.src;
   this.title = props.title
  }
  

  render()
  {
    return(
      <div class={`sidebarRow ${this.selected && "selected"}`}>
        <img 
        class="icon" 
        src={this.src}></img>
        <h2>{this.title}</h2>
      </div>
    )
  }
}

export default SidebarRow;