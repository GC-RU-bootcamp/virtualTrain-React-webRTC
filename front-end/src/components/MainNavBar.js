import React, { PureComponent } from 'react';
import MainNavMenu from './MainNavMenu.js';
import MainNavBrand from './MainNavBrand.js';

class MainNavBar extends PureComponent {

  render() {
    return (
      <nav className='flex justify-between ba b--black bg-washed-green o-90'>
        <MainNavBrand />
        <MainNavMenu />
      </nav>
    );
  }

}

export default MainNavBar;
