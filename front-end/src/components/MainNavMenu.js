import React, { Component } from 'react';
import NavItem from '../atoms/NavItem.js';
import NavButton from '../atoms/NavButton.js';

class MainNavMenu extends Component {

  render() {
    return (
      <div className='flex items-center pa3 '>
        <NavItem text="About us" />
        <NavItem text="Sign In" />
        <NavButton text="Register" />
      </div>
    );
  }

}

export default MainNavMenu;
