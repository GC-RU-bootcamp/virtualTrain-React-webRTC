//import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
//import {
//  Container,
//  Icon,
//  Image,
//   Menu,
//   Sidebar,
//   Responsive
// } from "semantic-ui-react";

import {BrowserRouter as Router, Route, Switch, 
//  NavLink, 
  Link} from "react-router-dom";
import SessionForm from "./components/SessionsForm";
import CreateSessionForm from "./components/CreateSessionForm";
import SessionHistoryForm from "./components/SessionHistoryForm";
import HomeForm from "./components/HomeForm";
import NavBar from "./components/NavBar";

//const App = () => (

 const loggedOut =  [
    { as: Link, content: "Überlift", key: "home", to:"/"},
    { as: Link, content: "Find Sessions", key: "find-sessions" , to: "/sessions" },
  ];

const loggedInHost =  [
  { as: Link, content: "Überlift", key: "home", to:"/"},
  { as: Link, content: "Find Sessions", key: "find-sessions" , to: "/sessions" },
  { as: Link, content: "Past Sessions", key: "session_history", to:"/session_history" },
  { as: Link, content: "Create Session", key: "create_session", to:"/create_session" }
];

const loggedInClient =  [
  { as: Link, content: "Überlift", key: "home", to:"/"},
  { as: Link, content: "Find Sessions", key: "find-sessions" , to: "/sessions" },
  { as: Link, content: "Past Sessions", key: "session_history", to:"/session_history" },
];

class App extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { 
      in: false,
      /*logged in ?    we can eliminate this and just use role*/
      loginInfo: {
        role: "",   /*role is falsey when not logged in*/
        username: "",
        firstName: "",
        lastName: ""
      },
      leftItems:  loggedOut
      ,
      rightItems:  [
        // { as: "a", content: "Login", key: "login" },
        // { as: "a", content: "Register", key: "register" }
      ]
    } // end state

    this.modalSubmit = this.modalSubmit.bind(this);
  } // end constructor
    
  modalSubmit(param) {
    console.log("DesktopContainer param:", param);

    this.setState(prevState => ({ in: !prevState.in,
      loginInfo: {
        role: param.role,
        username: param.logon_id,
        firstName: param.firstName,
        lastName: param.lastName
      },
      leftItems: !param.role?loggedOut:param.role==='host'?loggedInHost:loggedInClient
    }));
    console.log("<App> modalSubmit() state:", this.state);
  }; // end modalSubmit

  render(props){
    return ( 
       <Router>
        <div>
        <NavBar leftItems={this.state.leftItems} rightItems={this.state.rightItems} modalSubmit={ {loginState: this.state.loginInfo, modalSubmit:this.modalSubmit}} > </NavBar>
          <Switch>
            <Route exact path="/" component={HomeForm }/>
            <Route exact path="/sessions" component={SessionForm}/>
            <Route exact path="/session_history" component={SessionHistoryForm}/>
            <Route exact path="/create_session" component={CreateSessionForm}/>
            <Route render={() => (<h1 className="text-center">Page Not Found!</h1>)}/>
          </Switch>
        </div>
      </Router>
    )
  }

};

render(<App />, document.getElementById("root"));
