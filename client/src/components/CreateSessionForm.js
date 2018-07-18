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

import Moment from 'react-moment';

import API from "../utilities/API"

import {BrowserRouter as Router, Route, Switch,  Redirect,
  //  NavLink, 
    Link} from "react-router-dom";

class CreateSessionForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = {  name: "",
                    description: "",
                    item_sesn_type: "",
                    item_date: "",
                    cost: "",
                    min_attendees: "",
                    max_attendees: "",
  };

  this.handleOninputChange = this.handleOninputChange.bind(this);
  // this.fileChangedHandler = this.fileChangedHandler.bind(this);
    console.log("<CreateSessionForm> constructor() state=>", this.state," props=>", this.props, " context=>", this.context);

  }

  handleOninputChange = (event, data) => {
    // console.log("CreateSessionForm.handleOninputChange.event", event.target);
    // console.log("CreateSessionForm.handleOninputChange.data", data);
    let { name, value } = event.target;
    if (!name){ // type=select
       name = data.name;
       value = data.value;
    }
    console.log("CreateSessionForm.handleOninputChange: [name], value", [name], value);
    this.setState({
      [name]: value
    });
    console.log("<CreateSessionForm> handleOninputChange() state=>", this.state," props=>", this.props, " context=>", this.context);

  }

  create = () => {
    const param = this.state;
    console.log("<CreateSessionForm> create() param:", param);

    const formData = {
            name: param.name.trim(),
            'description': param.description.trim(),
            'item_date': param.item_date.trim(),
            'cost': param.cost.trim(),
            //  'item_sesn_type': param.item_sesn_type.trim(),  // not supported by API
            'min_attendees': param.min_attendees.trim(),
            'max_attendees': param.max_attendees.trim(),
            'confirmed': 1 ,
    }

      console.log("<CreateSessionForm> create() formData:", formData);
     
      API.createSession(formData)
      .then((result) => {
        console.log("<CreateSessionForm> create() results:", result.data);
        // this.props.LoginProp.modalSubmit(result.data);
        this.props.history.push('/my-sessions');
      })
      .catch(err => console.log(err))
  };

  // createXX = () => {
  //   const param = this.state;
  //   console.log("<CreateSessionForm> create() param:", param);

  //   const formData = new FormData();
  //    formData.append('name', param.name.trim());
  //    formData.append('description', param.description.trim());
  //    formData.append('item_date', param.item_date.trim());
  //    formData.append('cost', param.cost.trim());
  //   //  formData.append('item_sesn_type', param.item_sesn_type.trim());
  //    formData.append('min_attendees', param.min_attendees.trim());
  //    formData.append('max_attendees', param.max_attendees.trim());
  //    formData.append('confirmed', 1 );
  //   //  if (param.signUpfile)
  //   //  {
  //   //   console.log("signup formData added <photo>");
  //   //   formData.append("photo", param.signUpfile, param.signUpfile.name);
  //   //  }
  //     console.log("<CreateSessionForm> create() formData:", formData);
  //     //Display the key/value pairs
  //     for(var pair of formData.entries()) {
  //       console.log(pair[0] + ', '+  pair[1]          ); 
  //     }
  //     API.createSession(formData)
  //     .then((result) => {
  //       console.log("<CreateSessionForm> create() results:", result.data);
  //       this.props.LoginProp.modalSubmit(result.data);
  //       this.props.history.push('/my-sessions');
  //     })
  //     .catch(err => console.log(err))
  // };

  cancel = (param) => {
    this.setState({  name: "",
                    description: "",
                    // item_sesn_type: "",
                    item_date: "",
                    cost: "",
                    min_attendees: "",
                    max_attendees: "",
    });
    this.props.history.push('/my-sessions');
  }

  render(props) {

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
                  <Form.Field  label='Name' placeholder='Title of the training' control={Input} name="name" value={this.state.name} onChange={this.handleOninputChange}  />
                  <Form.Field  label='Description' placeholder='Description of the training' control={Input} name="description"value={this.state.description} onChange={this.handleOninputChange} />
                  {/* <Form.Field  label='Training Type' placeholder='Type of training' control={Select} options={options}  name="item_sesn_type" value={this.state.item_sesn_type} onChange={this.handleOninputChange} /> */}
                  {/* item_sesn_type is not supported by the API */}
                  <Form.Field  label='Training Date' placeholder='Date of training' control={Input} name="item_date" value={this.state.item_date} onChange={this.handleOninputChange} />
                  <Form.Field  label='Cost' placeholder='$ cost to attend session' control={Input} name="cost" value={this.state.cost} onChange={this.handleOninputChange} />
                  <Form.Field  label='Min Client Cnt ' placeholder='Minimum number of clients' control={Input} name="min_attendees" value={this.state.min_attendees} onChange={this.handleOninputChange} />
                  <Form.Field  label='Max Client Cnt ' placeholder='Maximum number of clients' control={Input} name="max_attendees" value={this.state.max_attendees} onChange={this.handleOninputChange} />

                  {/* <Form.Field label="Profile picture" placeholder='myPhoto.png' type="file" control={File} name="signUpFile" onChange={this.props.fileHandler} /> */}
                  {/* <Form.Field>
                    <label>Profile picture</label>
                    <input type="file" placeholder='' name="signUpFile" onChange={this.props.fileHandler}/>
                  </Form.Field>  */}
                  <Button onClick={this.cancel} negative  color='red' inverted>Cancel </Button>
                  <Button onClick={this.create} positive  labelPosition='right' icon='checkmark' content='Create' />
             </Form>
           

      </div>
    )
  }
}


export default CreateSessionForm
