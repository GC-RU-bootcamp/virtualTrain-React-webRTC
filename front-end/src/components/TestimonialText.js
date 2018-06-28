import React, { Component } from 'react';

class TestimonialText extends Component {

  render() {
    return (
      <blockquote className=" athelas  black bl bw1 flex flex-column justify-between ma0 ph3 pv3  b--dark-green measure-narrow">
        <p class="f6 f5-m pa0 ml3 f5-l lh-copy pl2">
          {this.props.text}
        </p>
        <cite class="f6 ttu tracked fs-normal">―{this.props.name}</cite>
      </blockquote>
    );
  }

}

export default TestimonialText;
