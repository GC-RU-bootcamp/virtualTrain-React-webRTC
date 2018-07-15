import React, { Component } from 'react'
import { Button, Modal, Label } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'

import  LoginForm  from './LoginForm'
import  SignUpForm  from './SignUpForm'
import  API  from '../utilities/API'
// import { Route, Redirect,  withRouter } from 'react-router'

class ModalLogin extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { open: true,
      username: "",
      password: "", 
      signUpFname: "",
      signUpLname: "",
      signUpEmail: "",
      signUpCell: "",
      signUpPW: "",
      signUpRole: "",
      signUpfile: "",
      showLogin: this.props.useLogin // showLogin=true show login form else show signup
    };

    this.handleOninputChange = this.handleOninputChange.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.PickForm = this.PickForm.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this);
    // console.log("ModalLogin props", props);
    // console.log("ModalLogin context",context);
    console.log("<ModalLogin> constructor() state=>", this.state," props=>", this.props, " context=>", this.context);

  }
 
  handleOninputChange(event, data) {
    // console.log("ModalLogin.handleOninputChange.event", event.target);
    // console.log("ModalLogin.handleOninputChange.data", data);
    let { name, value } = event.target;
    if (!name){ // type=select
       name = data.name;
       value = data.value;
    }
    //console.log("ModalLogin.handleOninputChange:", [name], value);
    this.setState({
      [name]: value
    });
  }

  fileChangedHandler = (event) => {
    this.setState({signUpfile: event.target.files[0]})
    //console.log("ModalLogin.fileChangedHandler:", event.target.name, event.target.files[0].name);
  }

  closeConfigShow = (closeOnEscape, closeOnRootNodeClick, showLogin) => () => {
    if (!this.props.LoginProp.loginState.role){
      this.setState({ closeOnEscape, closeOnRootNodeClick, showLogin: showLogin, open: true });
  } else {
      this.setState({ closeOnEscape, closeOnRootNodeClick, showLogin: showLogin,  open: false });
      this.logout();
    }
  }

  close = () => { 
                  this.setState({ open: false });  // close modal
                  this.props.history.push('/'); 
                }

  createClose = () => {
      this.setState({ open: false });  // close modal
      //console.log("<ModalLogin> createClose() showLogin=", this.state.showLogin);
      if (this.state.showLogin) {
        this.login(this.state.username, this.state.password );
      } else {
        this.signup(this.state);
      }
      //this.props.history.push('/');
  };

  login = (username, password ) => {
    const params = {
      logon_id: username,
      logon_pwd: password
    };
      API.userLogin(params)
        .then((result) => {
         // console.log("login API results:", result.data);
         console.log("<ModalLogin> login() API.userLogin=>result=", result , " state=>", this.state," props=>", this.props, " context=>", this.context);

          this.props.LoginProp.modalSubmit(result.data);
          if (result.data.role==="host") {
            this.props.history.push('/my-sessions');
          } else if (result.data.role==="client"){
            this.props.history.push('/sessions');
          } else {
            this.props.history.push('/sessions');
          }
        })
        .catch(err => console.log(err))
    };

    logout = ( ) => {
      
      console.log("<ModalLogin> logout() 'redirect' state=>", this.state," props=>", this.props, " context=>", this.context);
          // < Redirect push to="/"  />
          this.props.history.push('/');
          // this.props.history.push("/");
          
          API.userLogout()
          .then((result) => {
            console.log("logout API results:", result.data);
            this.props.LoginProp.modalSubmit(result.data);
            this.props.history.push('/');
          })
          .catch(err => console.log(err))
      };

    signup = (param) => {
      console.log("signup() param:", param);

      const formData = new FormData();
       formData.append('logonId', param.username.trim());
       formData.append('password', param.password.trim());
       formData.append('role', param.signUpRole.trim());
       formData.append('fstNam', param.signUpFname.trim());
       formData.append('lstNam', param.signUpLname.trim());
       formData.append('email', param.signUpEmail.trim());
       formData.append('cell', param.signUpCell.trim());
       formData.append('createdBy', param.username.trim());
       if (param.signUpfile)
       {
        console.log("signup formData added <photo>");
        formData.append("photo", param.signUpfile, param.signUpfile.name);
       }
        console.log("signup formData:", formData);
        //Display the key/value pairs
        for(var pair of formData.entries()) {
          console.log(pair[0] + ', '+  pair[1]          ); 
        }
        API.userSignup(formData)
        .then((result) => {
          console.log("signup results:", result.data);
          this.props.LoginProp.modalSubmit(result.data);
          this.props.history.push('/sessions');
        })
        .catch(err => console.log(err))
    };

  PickForm = () => {
    if (this.state.showLogin)
    return (
      <LoginForm  textHandler={this.handleOninputChange} />
    );
    return(
      <SignUpForm textHandler={this.handleOninputChange} fileHandler={this.fileChangedHandler} />
    );
  };

  switchForm = () => {
    this.setState({
      showLogin: !this.state.showLogin,
      username: "",
      password: "", 
      signUpFname: "",
      signUpLname: "",
      signUpEmail: "",
      signUpCell: "",
      signUpPW: "",
      signUpRole: "",
      signUpfile: "",
    })
  };

  
  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   // if (this.props.userID !== prevProps.userID) {
  //   //   this.fetchData(this.props.userID);
  //   // }
  //   this.setState({
  //     showLogin: true})
  // }

  render(props) {
    const { open, closeOnEscape, closeOnRootNodeClick } = this.state
    // const loginState = this.props.LoginProp.loginInfo.role;
    const loginState = this.props.LoginProp.loginState.role;
    // const loginState = false;

    console.log("<Modal> render() state=>", this.state," props=>", this.props, " context=>", this.context);


    return (
      <div>
        {/* <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button> */}
        <Label pointing='down' style={loginState.role ?{ marginRight: '0.5em' }:{display:'none'}}>{loginState.role?loginState.firstName + " " + loginState.lastName : ""}</Label>
        <Button inverted onClick={this.closeConfigShow(true, false, true)}>{loginState.role?"Log Out": "Log In"}</Button>
        <Button inverted style={loginState.role ?{display:'none'}:{ marginLeft: '0.5em' }} onClick={this.closeConfigShow(true, false, false)}>Sign Up</Button>
        {/* <Button as='a' inverted={!fixed} primary={fixed} style={this.state.in ?{display:'none'}:{ marginLeft: '0.5em' }}> */}

        <Modal
          open={open}
          
          closeOnEscape={closeOnEscape}
          closeOnRootNodeClick={closeOnRootNodeClick}
        >
          <Modal.Header>{this.state.showLogin?"Log into Your Account":"Create account"}</Modal.Header>
          <Modal.Content>
            {this.PickForm()}
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.switchForm}>{this.state.showLogin ? "Switch to Sign Up" : "Switch to Log In"}</Button>
            <Button onClick={this.close} negative  color='red' inverted>
              Cancel
            </Button>
            <Button onClick={this.createClose} positive  labelPosition='right' icon='checkmark' content='Continue' />
          </Modal.Actions>
          
        </Modal>
      </div>
    )
  }
}

export default ModalLogin
