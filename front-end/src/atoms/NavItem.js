import React, { Component } from 'react';

export default class NavLink extends Component {
  render(){
    return(
      <a className='f6 black no-underline dib dim mr3 '>{this.props.text}</a>
    )
  }
}
