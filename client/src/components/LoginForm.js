import React, { Component } from 'react'
//import { Button, Modal } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { };

    // console.log("LoginForm state", this.state);
    // console.log("LoginForm props", props);
    // console.log("LoginForm context", context);
  }

  render(props) {
    // console.log("LoginForm state", this.state);
    // console.log("LoginForm props", this.props);

    return (
      <div>
    
            <Form>
              {/* <p>Your ticket to good health</p> */}
              <Form.Field>
                <label>Logon ID</label>
                <input placeholder='Username' name="username" onChange={this.props.textHandler}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" name="password"  onChange={this.props.textHandler} />
              </Form.Field> 
            </Form>

      </div>
    )
  }
}


export default LoginForm
