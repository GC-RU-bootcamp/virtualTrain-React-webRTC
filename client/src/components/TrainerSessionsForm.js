import React, { Component } from 'react'
//import { Button, Modal } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


import Moment from 'react-moment';

import API from "../utilities/API"

import {BrowserRouter as Router, Route, Switch,  Redirect,
  //  NavLink, 
    Link} from "react-router-dom";

class TrainerSessionsForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { response:{}
  };

    console.log("<TrainerSessionsForm> constructor() state:", this.state," props:", this.props, "context:", this.context);
    this.getSessions = this.getSessions.bind(this);

  }

  join = (uuid, event) => {
    //event.preventDefault();
    // const data = {
    //   session_id: id,
    //   logon_id: this.state.response.loginInfo.logon_id,
    //   user_id: this.state.response.loginInfo.id,
    // };
    console.log("join click() uuid=",uuid, " event=", event, );
    // window.location = "/join-session/"+id;
    this.props.history.push("/join-session/"+uuid);
    //return(<Redirect to={"/join-session/"+uuid} />)
    //this.props.LoginProp.startSession(uuid);
    // API.join(data)
    //   .then((result) => {
    //     console.log("<SessionsForm> API.userRegister result.data", result.data);
    //     //console.log("<SessionsForm> API.getSessons() results:", result.data);
    //     //this.props.passHandler.modalSubmit(result.data)
    //     // this.setState({
    //     //   response: result.data,
    //     // })

    //   })
    //   .catch(err => console.log(err))
  }
  
  componentDidMount() {
    console.log("<TrainerSessionsForm> componentDidMount() before getSessions() state:", this.state," props:", this.props, "context:", this.context);

    this.getSessions();
    console.log("<TrainerSessionsForm> componentDidMount() after getSessions() state:", this.state," props:", this.props, "context:", this.context);

  }

  getSessions = () => {
    API.getSessons()
      .then((result) => {
        console.log("<TrainerSessionsForm> API.getSessons() results:", result.data);
        //this.props.passHandler.modalSubmit(result.data)
        this.setState({
          response: result.data,
        })

      })
      .catch(err => console.log(err))
  };

  render(props) {
    // console.log("TrainerSessionsForm state", this.state);
    // console.log("TrainerSessionsForm props", this.props);

    console.log("<TrainerSessionsForm> render() state:", this.state," props:", this.props, "context:", this.context);
    // const loginInfo = this.state.response.loginInfo?
    //       this.state.response.loginInfo:
    //       {
    //           "logon_id": "",
    //           "firstName": "",
    //           "lastName": "",
    //           "role": "",
    //           "photo": null,
    //           "user_id": ""
    //       };
    const sessions = this.state.response.sessions?this.state.response.sessions:[];
  
    return (

      <div>
    
            {/* <Form> */}
              {/* <p>TrainerSessionsForm FORM</p>
              <p>{ "Full Name = "  + this.state.response.fullname}</p>
              {/* <p>{loginInfo.first}</p> */}
              {/*}
              {console.log("in render")}
              {console.log("this.state.response", this.state.response)}
              <p>{ "logon_id = "  +  loginInfo.logon_id}</p>
              <p>{ "firstName = "  +  loginInfo.firstName}</p>
              <p>{ "lastName = "  +  loginInfo.lastName}</p>
              <p>{ "host = "  +  loginInfo.role}</p>
              <p>{ "photo = " +   loginInfo.photo}</p>
              <p>{  "user_id = "  +  loginInfo.user_id}</p>
             <p> </p> */}
             <h4>{ "Welcome Trainer "  + this.state.response.fullname}</h4>
              {/* <p>{loginInfo.first}</p> */}
              <h5>My up coming training Sessions</h5>
             
  <Table inverted>
    <Table.Header>
    <Table.Row>
        {/* <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>Host id</Table.HeaderCell> */}
        <Table.HeaderCell>Name</Table.HeaderCell>
        {/* <Table.HeaderCell>item_sesn_type</Table.HeaderCell> */}
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>item_date</Table.HeaderCell>
        {/* <Table.HeaderCell>cost</Table.HeaderCell>
        <Table.HeaderCell>conn_info</Table.HeaderCell> */}
        <Table.HeaderCell>Action</Table.HeaderCell> 
      </Table.Row>
    </Table.Header>

        <Table.Body>
            {sessions
              .map(session => (
                <Table.Row key={session.id} id = {session.id} >
                  {/* <Table.Cell>{session.id}</Table.Cell>   
                  <Table.Cell>{session.people_id}</Table.Cell>    */}
                  <Table.Cell>{session.name}</Table.Cell>   
                  {/* <Table.Cell>{session.item_sesn_type}</Table.Cell>    */}
                  <Table.Cell>{session.description}</Table.Cell>   
                  <Table.Cell><Moment format="MM/DD/YYYY HH:mm">
                    {session.item_date}
                </Moment></Table.Cell>   
                  {/* <Table.Cell>{"$" + session.cost}</Table.Cell>   
                  <Table.Cell>{session.conn_info}</Table.Cell>    */}
                <Table.Cell><Button  basic color='blue' id={"join="+session.id}      session_conn_info={session.conn_info} onClick={(e) => this.join(session.conn_info, e)}>Join</Button></Table.Cell>   

                </Table.Row>
              ))}
        </Table.Body>
      </Table>

      </div>
    )
  }
}


export default TrainerSessionsForm
