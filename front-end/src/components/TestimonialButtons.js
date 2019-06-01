import React, { Component } from 'react';

class TestimonialButtons extends Component {

  render() {
    return (
      <div className="flex justify-between">
        <a href="#0" class="no-underline black grow hover-bg-washed-green br-pill ph2 pv1 mr3 ba">
            <svg class="w1" data-icon="chevronLeft" viewBox="0 0 32 32" >
              <title>chevronLeft icon</title>
              <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
            </svg>
        </a>
        <a href="#0" class="no-underline black grow hover-bg-washed-green  br-pill ph2 pv1 ba">
          <svg class="w1 " data-icon="chevronRight" viewBox="0 0 32 32" >
            <title>chevronRight icon</title>
            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
          </svg>
        </a>
      </div>
    );
  }

}

export default TestimonialButtons
