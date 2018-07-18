import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import { 
  //Checkbox, 
 // Radio, 
  Select, 
  //TextArea 
} from 'semantic-ui-react'

class CreateSessionForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { };
    console.log("<CreateSessionForm> constructor() state=>", this.state," props=>", this.props, " context=>", this.context);
  }

  render(props) {
    // console.log("CreateSessionForm state", this.state);
    // console.log("CreateSessionForm props", this.props);
    console.log("<CreateSessionForm> render() state=>", this.state," props=>", this.props, " context=>", this.context);
    
    const options = [
      { key: '1', text: 'Balance & Stretch', value: 'Balance & Stretch' },
      { key: '2', text: 'Total Body', value: 'Total Body' },
      { key: '3', text: 'Cardio', value: 'Cardio' },
      { key: '4', text: 'Strength training', value: 'Strength training' },
      { key: '5', text: 'Balance and Flexibility', value: 'Balance and Flexibility' },
    ];
  
    return (

      <div>
    
            {/* <Form> */}
              <p>Create Sessions FORM</p>
              <Form>
                  <Form.Field  label='Name' placeholder='Title of the training' control={Input} name="name" onChange={this.props.textHandler} />
                  <Form.Field  label='Description' placeholder='Description of the training' control={Input} name="description" onChange={this.props.textHandler} />
                  <Form.Field  label='Training Type' placeholder='Type of training' control={Select} options={options}  name="item_sesn_type" onChange={this.props.textHandler} />
                  <Form.Field  label='Training Date' placeholder='Date of training' control={Input} name="item_date" onChange={this.props.textHandler} />
                  <Form.Field  label='Cost' placeholder='$ cost to attend session' control={Input} name="cost" onChange={this.props.textHandler} />
                  <Form.Field  label='Min Client Cnt ' placeholder='Minimum number of clients' control={Input} name="min_attendees" onChange={this.props.textHandler} />
                  <Form.Field  label='Max Client Cnt ' placeholder='Maximum number of clients' control={Input} name="max_attendees" onChange={this.props.textHandler} />

                  {/* <Form.Field label="Profile picture" placeholder='myPhoto.png' type="file" control={File} name="signUpFile" onChange={this.props.fileHandler} /> */}
                  {/* <Form.Field>
                    <label>Profile picture</label>
                    <input type="file" placeholder='' name="signUpFile" onChange={this.props.fileHandler}/>
                  </Form.Field>  */}
                  <Button type='submit'>Submit</Button>
             </Form>
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


export default CreateSessionForm
