import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer class="pv4 ph3 ph5-m ph6-l ma0 bg-navy w-100 white">
        <small class="f6 db tc">© 2016 <b class="ttu">SOME COMPANY Inc</b>., All Rights Reserved</small>
        <div class="tc mt3">
          <a href="/language/" title="Language" class="f6 dib ph2 link white dim">Language</a>
          <a href="/terms/"    title="Terms" class="f6 dib ph2 link white dim">Terms of Use</a>
          <a href="/privacy/"  title="Privacy" class="f6 dib ph2 link white dim">Privacy</a>
        </div>
      </footer>
    );
  }

}

export default Footer;
