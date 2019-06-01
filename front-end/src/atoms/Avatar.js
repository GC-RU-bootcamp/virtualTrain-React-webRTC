import React, { Component } from 'react';

class Avatar extends Component {

  render() {
    return (
      <img
          src={this.props.avatar}
          className="br4 mv3 h3 w3 " alt="avatar">
      </img>
    );
  }

}

export default Avatar;
