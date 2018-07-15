import React, { Component } from 'react'
//import { Button, Modal } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'

class ProfileForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { };
    console.log("<ProfileForm> constructor() state=>", this.state," props=>", this.props, " context=>", this.context);
  }

  render(props) {
    // console.log("ProfileForm state", this.state);
    // console.log("ProfileForm props", this.props);
    console.log("<ProfileForm> render() state=>", this.state," props=>", this.props, " context=>", this.context);

  
    return (
      <div>
    
            {/* <Form> */}
              <p>Profile FORM</p>
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


export default ProfileForm
