import React, { Component } from 'react';

export default class NavButton extends Component {
  render(){
    return(
      <a className='f6 dib black hover-bg-black hover-washed-green mr3 ba br-pill b--black bg-white pv2 ph4 bg-animate no-underline'>{this.props.text}</a>
    )
  }
}
