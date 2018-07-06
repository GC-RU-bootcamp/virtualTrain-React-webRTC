import React, { Component } from 'react'
//import { Button, Modal } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

import Moment from 'react-moment';

import API from "../utilities/API"

class SessionsForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { response:{}
  };

    console.log("<SessionForm> constructor() state:", this.state," props:", this.props, "context:", this.context);
    this.getSessions = this.getSessions.bind(this);

  }
  
  componentDidMount() {
    console.log("<SessionForm> componentDidMount() before getSessions() state:", this.state," props:", this.props, "context:", this.context);

    this.getSessions();
    console.log("<SessionForm> componentDidMount() after getSessions() state:", this.state," props:", this.props, "context:", this.context);

  }

  getSessions = () => {
    API.getSessons()
      .then((result) => {
        console.log("<SessionsForm> API.getSessons() results:", result.data);
        //this.props.passHandler.modalSubmit(result.data)
        this.setState({
          response: result.data,
        })

      })
      .catch(err => console.log(err))
  };

  render(props) {
    // console.log("SessionsForm state", this.state);
    // console.log("SessionsForm props", this.props);

    console.log("<SessionForm> render() state:", this.state," props:", this.props, "context:", this.context);
    const loginInfo = this.state.response.loginInfo?
          this.state.response.loginInfo:
          {
              "logon_id": "",
              "firstName": "",
              "lastName": "",
              "role": "",
              "photo": null,
              "user_id": ""
          };
    const sessions = this.state.response.sessions?this.state.response.sessions:[];
  
    return (

      <div>
    
            {/* <Form> */}
              <p>Sessions FORM</p>
              <p>{ "Full Name = "  + this.state.response.fullname}</p>
              {/* <p>{loginInfo.first}</p> */}
              {console.log("in render")}
              {console.log("this.state.response", this.state.response)}
              <p>{ "logon_id = "  +  loginInfo.firstName}</p>
              <p>{ "firstName = "  +  loginInfo.firstName}</p>
              <p>{ "lastName = "  +  loginInfo.host}</p>
              <p>{ "photo = " +   loginInfo.photo}</p>
              <p>{  "user_id = "  +  loginInfo.user_id}</p>
             <p> </p>
             
  <Table >
    <Table.Header>
    <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>Host id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>item_sesn_type</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>item_date</Table.HeaderCell>
        <Table.HeaderCell>cost</Table.HeaderCell>
        <Table.HeaderCell>conn_info</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {sessions
          .map(session => (
            <Table.Row key={session.id} id = {session.id} >
              <Table.Cell>{session.id}</Table.Cell>   
              <Table.Cell>{session.people_id}</Table.Cell>   
              <Table.Cell>{session.name}</Table.Cell>   
              <Table.Cell>{session.item_sesn_type}</Table.Cell>   
              <Table.Cell>{session.description}</Table.Cell>   
              <Table.Cell><Moment format="MM/DD/YYYY HH:mm">
                {session.item_date}
            </Moment></Table.Cell>   
              <Table.Cell>{"$" + session.cost}</Table.Cell>   
              <Table.Cell>{session.conn_info}</Table.Cell>   
            </Table.Row>
          ))}
    </Table.Body>
  </Table>


             {/* {this.getSessions()} */}
             {/* <h2>{this.state.response.sessions.length()
                ?this.state.response.sessions.length() + " Results"
                : "No Sessions to Display"}
              </h2> */}
             
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


export default SessionsForm
