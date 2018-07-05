import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomepageHeading from './OLD-HomepageHeading';
import { Link } from 'react-router-dom';
import ModalLogin from './ModalLogin.js';

import {
//  Button ,
  Container,
  Menu ,
  Responsive ,
  Segment ,
  Visibility ,
} from 'semantic-ui-react';


export default class DesktopContainer extends Component {
  constructor(props) {
    super(props); 
    this.state = { in: false,
      /*logged in ?    we can eliminate this and just use role*/
      loginInfo: {
        role: "",
        username: "",
        firstName: "",
        lastName: ""
      }
    } /*role is falsey when not logged in*/

    this.modalSubmit = this.modalSubmit.bind(this);
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  
  modalSubmit(param) {
    console.log("DesktopContainer param:", param);

    this.setState(prevState => ({
      in: !prevState.in,
      loginInfo:{role: param.role,
      username: param.logon_id,
      firstName: param.firstName,
      lastName: param.lastName
    }

    }));
    console.log("DesktopContainer state:", this.state);
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>
                  <Link to="/work">
                    Work
                  </Link>
                </Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  {/* <Link to="/login">
                   
                  <Button as='a' inverted={!fixed} primary={fixed} style={this.state.in ?{display:'none'}:{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                  </Link> */}
                  {/* <Link to="/registration">
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Link> */}
                  <ModalLogin passHandler={this.modalSubmit} logState={this.state.in} btnMsg={this.state.in ? 'Log out' : 'Log in'} > 
                  
                  </ModalLogin>
                  <span>{" " + this.state.loginInfo.firstName + " " + this.state.loginInfo.lastName }</span>
                  {/* <Button as='a' inverted={!fixed} primary={fixed} style={this.state.in ?{display:'none'}:{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button> */}
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}
