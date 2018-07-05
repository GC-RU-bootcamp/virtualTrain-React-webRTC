import _ from "lodash";
import React, { Component } from "react";
//import { render } from "react-dom";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

import LoginModal from "./ModalLogin"

import {
  //BrowserRouter as Router, Route, Switch,  NavLink,
   Link} from "react-router-dom";
// import SessionForm from "./components/SessionsForm";
// import CreateSessionForm from "./components/CreateSessionForm";
// import SessionHistoryForm from "./components/SessionHistoryForm";
// import HomeForm from "./components/HomeForm";
//import {NavLink} from 'react-router-dom'


const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
  modalSubmit
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Link as="Link" to="/" >
            <Image size="mini" src="https://res.cloudinary.com/dujdeh5dl/image/upload/v1530628176/ICEPeers.png" as="Link" to="/"/>
          </Link>
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {/* {_.map(rightItems, item => <Menu.Item {...item} />)} */}
          {_.map(rightItems, item => <Menu.Item {...item} />)}
          <LoginModal passHandler={modalSubmit} />
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems, modalSubmit }) => (
  
  //console.log(_.map(leftItems, item => "<Menu.Item" + {...item} + "/>"));
   <Menu fixed="top" inverted>
    <Menu.Item>
      <Link as="Link" to="/" >
          <Image size="mini" src="https://res.cloudinary.com/dujdeh5dl/image/upload/v1530628176/ICEPeers.png"  />
      </Link>
    </Menu.Item>
      {_.map(leftItems, item => <Menu.Item {...item} />)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <Menu.Item {...item} />)}
      <LoginModal passHandler={modalSubmit} />
    </Menu.Menu>
  </Menu>

);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

///////
class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    console.log("NavBar render state", this.state," props:", this.props, "context", this.context);
 
    const { children, leftItems, rightItems, modalSubmit } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
            modalSubmit={modalSubmit}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} modalSubmit={modalSubmit} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

// const leftItems = [
//   { as: Link, content: "Überlift", key: "home", to:"/"},
//   { as: Link, content: "Find Sessions", key: "find-sessions" , to: "/sessions" },
//   { as: Link, content: "Past Sessions", key: "session_history", to:"/session_history" },
//   { as: Link, content: "Create Session", key: "create_session", to:"/create_session" }
// ];
// /*Find Sessions
//   My Sessions
//   Past Sessions
//   Create Session*/
// const rightItems = [
//   { as: "a", content: "Login", key: "login" },
//   { as: "a", content: "Register", key: "register" }
// ];

export default NavBar