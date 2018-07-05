import React, { 
  Component} from 'react'
//import { Button, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import { 
  //Checkbox, 
 // Radio, 
  Select, 
  //TextArea 
} from 'semantic-ui-react'





class SignUpForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { };

    //console.log("<SignUpForm> constructor() state", this.state," props:", this.props, "context:", this.context);

  }

  render(props) {
        //console.log("<SignUpForm> render() state", this.state," props:", this.props, "context:", this.context);

    const options = [
      { key: 'm', text: 'Member', value: 'client' },
      { key: 't', text: 'Trainer', value: 'host' },
    ];
  
    return (
      <div>
    
            <Form>
              {/* <p>Your ticket to good health</p> */}
              <Form.Field  label='First name' placeholder='First name' control={Input} name="signUpFname" onChange={this.props.textHandler} />
              <Form.Field  label='Last name' placeholder='Last name' control={Input} name="signUpLname" onChange={this.props.textHandler} />
              <Form.Field  label='Username' placeholder='Logon ID' control={Input}name="username" onChange={this.props.textHandler} />
              <Form.Field  label='Email address' placeholder='Email' control={Input} name="signUpEmail" onChange={this.props.textHandler} />
              <Form.Field  label='Password' placeholder='Password' control={Input} type="password" name="password" onChange={this.props.textHandler} />
              <Form.Field  label='Confirm Password' placeholder='Password' control={Input} type="password" name="SignupPW" onChange={this.props.textHandler} />
              <Form.Field label='Role?' placeholder='Role?' control={Select} options={options}  name="SignupRole" onChange={this.props.textHandler} />
              <Form.Field  label='Cell Phone' placeholder='xxx-xxx-xxxx' control={Input} name="signUpCell" onChange={this.props.textHandler} />
              {/* <Form.Field label="Profile picture" placeholder='myPhoto.png' type="file" control={File} name="signUpFile" onChange={this.props.fileHandler} /> */}
              <Form.Field>
                <label>Profile picture</label>
                <input type="file" placeholder='' name="signUpFile" onChange={this.props.fileHandler}/>
              </Form.Field> 
                {/* <button onClick={this.uploadHandler}>Upload!</button> * /}
              </Form.Field>
              {/* <Form.Field>
                <label>Cell Phone</label>
                <input placeholder='Cell Phone' name="signUpCell" onChange={this.props.textHandler}/>
              </Form.Field> */}
                {/* <button onClick={this.uploadHandler}>Upload!</button> */}
{/*               
              <Form.Field>
                <label>Profile picture</label>
                <input type="file" placeholder='' name="signUpFile" onChange={this.props.fileHandler}/>
                {/* <button onClick={this.uploadHandler}>Upload!</button> * /}
              </Form.Field>
               */}
              {/* <Form.Field>
                <label>First name</label>
                <input placeholder='First name' name="signUpFname" onChange={this.props.textHandler}/>
              </Form.Field>
   
              <Form.Field>
                <label>Last name</label>
                <input placeholder='last name' name="signUpLname" onChange={this.props.textHandler}/>
              </Form.Field>

              <Form.Field>
                <label>Logon ID</label>
                <input placeholder='Username' name="username" onChange={this.props.textHandler}/>
              </Form.Field> */}

              {/* <Form.Field>
                <label>Email address</label>
                <input placeholder='Email' name="signUpEmail" onChange={this.props.textHandler}/>
              </Form.Field>


              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" name="password"  onChange={this.props.textHandler} />
              </Form.Field> 

              <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='Password' type="password" name="SignupPW"  onChange={this.props.textHandler} />
              </Form.Field>  */}
            {/*}  <Form.Field>
                <label>Role</label>
                <div>
                  <Input list='SignupRole' placeholder='Role?' name="SignupRoleXXX" onChange={this.props.textHandler}/>
                  <datalist id='SignupRole'>
                    <option value='Client' />
                    <option value='Trainer' />
                  </datalist>
                </div>
              </Form.Field>*/}

         {/* <label>Role?</label>
              <Form.Group inline>
          <Form.Field
            control={Radio}
            label='Member'
            value='client'
            checked={value === 'client'} 
            name="SignupRole" onChange={this.props.textHandler}
          />
          <Form.Field
            control={Radio}
            label='Trainer'
            value='host'
            checked={value === 'host'}
            name="SignupRole" onChange={this.props.textHandler}
          />
        </Form.Group>
         */}
              
              {/* See for image upload:   https://www.academind.com/learn/react/snippets/image-upload/*/}
              {/* <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" name="loginPW"  onChange={this.props.loginPWHandler} />
              </Form.Field>  */}
            </Form>

      </div>
    )
  }
}


export default SignUpForm
