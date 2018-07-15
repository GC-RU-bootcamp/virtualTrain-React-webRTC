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

import {BrowserRouter as Router, Route, Switch,  Redirect,

//  NavLink, 
  Link} from "react-router-dom";
import SessionForm from "./components/SessionsForm";
import CreateSessionForm from "./components/CreateSessionForm";
import SessionHistoryForm from "./components/SessionHistoryForm";
import HomeForm from "./components/HomeForm";
import NavBar from "./components/NavBar";
//import SignUpForm from "./components/SignUpForm";
import LogoutForm from "./components/LogoutForm";
import ProfileForm from "./components/ProfileForm";
import TrainerSessionsForm from "./components/TrainerSessionsForm";
//import LoginForm from "./components/LoginForm";
import AboutForm from "./components/AboutForm";
import ModalLogin from "./components/ModalLogin";
import JoinSession from "./components/JoinSession";

import  API  from '../src/utilities/API'


//const App = () => (

//LEFT 
 const loggedOutLeft =  [
    { as: Link, content: "Überlift", key: "home", to:"/"},
    // { as: Link, content: "Find Sessions", key: "find-sessions" , to: "/sessions" },
  ];

const loggedInHost =  [
  { as: Link, content: "Überlift", key: "home", to:"/"},
  { as: Link, content: "Client Sessions", key: "find-sessions" , to: "/sessions" },
  { as: Link, content: "My Sessions", key: "my-sessions", to:"/my-sessions" },
  { as: Link, content: "Create Session", key: "create_session", to:"/create_session" },
  { as: Link, content: "Past Sessions", key: "session_history", to:"/session_history" },
];

const loggedInClient =  [
  { as: Link, content: "Überlift", key: "home", to:"/"},
  { as: Link, content: "Find Sessions", key: "sessions" , to: "/sessions" },
  { as: Link, content: "Past Sessions", key: "session_history", to:"/session_history" },
];
//RIGHT

const loggedOutRight =  [
  { as: Link, content: "Log in", key: "login" , to: "/login" },
  { as: Link, content: "Sign Up", key: "signup" , to: "/signup" },
  { as: Link, content: "About", key: "about" , to: "/about" },
];

const loggedInRight =  [
  { as: Link, content: "Log Out", key: "log-out" , to: "/logout" },
  { as: Link, content: "Profile", key: "profile" , to: "/profile" },
  { as: Link, content: "About", key: "about" , to: "/about" },
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
      leftItems:  loggedOutLeft
      ,
      rightItems:  loggedOutRight
    } // end state

    this.modalSubmit = this.modalSubmit.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.isLoggedIn();
  } // end constructor
    
  modalSubmit(param) {
    console.log("index.js modalSubmit(param) param=", param);
    console.log("index.js modalSubmit(param) state=>", this.state," props=>", this.props, " context=>", this.context);


    this.setState(prevState => ({ in: !prevState.in,
      loginInfo: {
        role: param.role,
        username: param.logon_id,
        firstName: param.firstName,
        lastName: param.lastName
      },
      leftItems: !param.role?loggedOutLeft:param.role==='host'?loggedInHost:loggedInClient,
      rightItems: !param.role?loggedOutRight:loggedInRight
    }));
    // console.log("<App> modalSubmit() state:", this.state);
    // < Redirect to="/"  />
  }; // end modalSubmit

  isLoggedIn = ( ) => {
  
    console.log("<APP> index.js isLoggedIn() 'redirect' state=>", this.state," props=>", this.props, " context=>", this.context);
           
        API.userIsLogggedIn()
        .then((result) => {
          console.log("<App> userIsLogggedIn() API results:", result.data);
          this.modalSubmit(result.data);
          const {role} = result.data;
          const route = role===""?"/":role==="host"?"/my-sessions":"/sessions"
          // this.props.history.push(route);
          //window.location.href = route;
        })
        .catch(err => console.log(err))
    };

    // componentDidMount = () =>{
    componentWillMount = () =>{
      this.isLoggedIn();
    }

    startSession = (id) => {
    window.location = "/join-session/"+id;
    }

  render(props){
    
    const modalSubmitPropVal = {loginState: this.state.loginInfo, 
                             modalSubmit:this.modalSubmit,
                            startSession: this.startSession };
    
    return ( 
       <div>
          <Router>
            <div>
          <NavBar leftItems={this.state.leftItems} rightItems={this.state.rightItems} modalSubmit={ modalSubmitPropVal } > </NavBar>
            {console.log("index.js <Router> state=>", this.state," props=>", this.props, " context=>", this.context)}
              <Switch>
                <Route exact path="/" render={() => <HomeForm  props={ modalSubmitPropVal } />} />
                <Route exact path="/sessions" render={(props) => <SessionForm LoginProp={ modalSubmitPropVal }  {...props} />} />
                <Route exact path="/my-sessions" render={(props) => <TrainerSessionsForm LoginProp={ modalSubmitPropVal }  {...props} />} />
                <Route exact path="/session_history" render={(props) => <SessionHistoryForm LoginProp={ modalSubmitPropVal } {...props} />} />
                <Route exact path="/create_session" render={(props) => <CreateSessionForm LoginProp={ modalSubmitPropVal } {...props} />} />
                <Route exact path="/about" render={(props) => <AboutForm LoginProp={ modalSubmitPropVal } {...props} />} />
                <Route exact path="/login" render={(props) => <ModalLogin LoginProp={ modalSubmitPropVal } useLogin={true} {...props} />} />
                <Route exact path="/signup" render={(props) => <ModalLogin LoginProp={ modalSubmitPropVal } useLogin={false} {...props} />} />
                <Route exact path="/logout" render={(props) => <LogoutForm LoginProp={ modalSubmitPropVal } {...props} />} />
                <Route exact path="/profile" render={(props) => <ProfileForm LoginProp={ modalSubmitPropVal } {...props} />} />
                <Route exact path="/about" render={(props) => <AboutForm LoginProp={ modalSubmitPropVal } {...props }/>} />
                <Route  path="/join-session/:id" render={(props) => <JoinSession LoginProp={ modalSubmitPropVal } {...props }/>} />
                <Route render={() => (<h1 className="text-center">Page Not Found!</h1>)}/>
              </Switch>
            </div>
          </Router>

        
      </div>
    )
    
  }

};

render(<App />, document.getElementById("root"));
