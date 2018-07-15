import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'

//import { Button, Modal, Label } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'

import  API  from '../utilities/API'
//import { Route, Redirect,  withRouter } from 'react-router'

import ModalLogin from "./ModalLogin"


class LogoutForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { };
    console.log("<LogoutForm> constructor() state=>", this.state," props=>", this.props, " context=>", this.context);

    this.clickHandler = this.clickHandler.bind(this);

  }

//goTo = withRouter({ history }) => { return history.push('/') };

clickHandler = (event, data) =>  {
      let { name, value } = event.target;

      console.log("<LogoutForm> clickHandler() state=>", this.state," props=>", this.props, " context=>", this.context);
      this.props.history.push('/')
      // <Redirect to="/"/>
      console.log("<LogoutForm> clickHandler() state=>", this.state," props=>", this.props, " context=>", this.context);
    }

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

render(props) {

  this.logout();
  this.props.history.push('/');
    return null;
}

  renderXX(props) {
    // console.log("LogoutForm state", this.state);
    // console.log("LogoutForm props", this.props);
    console.log("<LogoutForm> render() state=>", this.state," props=>", this.props, " context=>", this.context);

    ModalLogin.logout();
    this.props.history.push('/');

  
    return (
      <div>
    
            {/* <Form> */}
              <p>Logout FORM</p>
              <Button onClick={this.clickHandler} > Logout </Button>
             
              {/* <ButtonXX /> */}
              {/* <Form.Field>
                <label>Logon ID</label>
                <input placeholder='Username' name="username" onChange={this.props.textHandler}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" name="password"  onChange={this.props.textHandler} />
              </Form.Field> 
            </Form> */}

      </div>
    )
  }
}

// const ButtonXX = withRouter(({ history }) => (
//   <button
//     type='button'
//     onClick={() => { history.push('/') }}
//   >
//     Click Me! 
//     <button class="ui button" role="button">Click Here</button>
//   </button>
// ))


export default LogoutForm
