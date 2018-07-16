import React, { Component } from 'react'
//import { Button, Modal } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
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
    this.register = this.register.bind(this);
    this.cancel = this.cancel.bind(this);
    this.join = this.join.bind(this);

  }
  
  componentDidMount() {
    console.log("<SessionForm> componentDidMount() before getSessions() state:", this.state," props:", this.props, "context:", this.context);

    this.getSessions();
    console.log("<SessionForm> componentDidMount() after getSessions() state:", this.state," props:", this.props, "context:", this.context);

  }

  getSessions = () => {
    API.getSessons()
      .then((result) => {
        console.log("result.data.sessions.length", result.data.sessions.length);
        if (result.data.sessions){
          for (let i = 0; i < result.data.sessions.length; i++) {
            //const element = result.data[i];
            result.data.sessions[i].registered = false;
            //console.log("result.data.sessions", result.data.sessions[i])
          }
        }
        // API.mySessons()
        //   .then((result) => {
        //   console.log("result.data.sessions.length", result.data.sessions.length);
        //   if (result.data.sessions){
        //     for (let i = 0; i < result.data.sessions.length; i++) {
        //       //const element = result.data[i];
        //       result.data.sessions[i].registered = false;
        //       //console.log("result.data.sessions", result.data.sessions[i])
        //     }
        //   }
        //   console.log("<SessionsForm> API.mySessons() results:", result.data);
        //   //this.props.passHandler.modalSubmit(result.data)
        //   this.setState({
        //     response: result.data,
        //   })
  
        // })
        // .catch(err => console.log(err))
        console.log("<SessionsForm> API.getSessons() results:", result.data);
        //this.props.passHandler.modalSubmit(result.data)
        this.setState({
          response: result.data,
        })

      })
      .catch(err => console.log(err))
  };

  register = (id, event) => {
    //event.preventDefault();
    const data = {
      session_id: id,
      logon_id: this.state.response.loginInfo.logon_id,
      user_id: this.state.response.loginInfo.id,
    };
    console.log("register click() id=",id, " event=", event, " data=", data);

    API.userRegister(data)
      .then((result) => {
        console.log("<SessionsForm> API.userRegister result.data", result.data);
        //console.log("<SessionsForm> API.getSessons() results:", result.data);
        //this.props.passHandler.modalSubmit(result.data)
        // this.setState({
        //   response: result.data,
        // })

      })
    //   .catch(err => console.log(err))
  }

  cancel = (id, event) => {
    //event.preventDefault();
    const data = {
      session_id: id,
      logon_id: this.state.response.loginInfo.logon_id,
      user_id: this.state.response.loginInfo.id,
    };
    console.log("usercancel click() id=",id, " event=", event, " data=", data);

    API.userUnRegister(data)
      .then((result) => {
        console.log("<SessionsForm> API.userRegister result.data", result.data);
        //console.log("<SessionsForm> API.getSessons() results:", result.data);
        //this.props.passHandler.modalSubmit(result.data)
        // this.setState({
        //   response: result.data,
        // })

      })
    //   .catch(err => console.log(err))
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
              {/* <p>Sessions FORM</p> */}
              <p>{ "Welcome "  + this.state.response.fullname}</p>
              {/* <p>{loginInfo.first}</p> */}
              <p>All Sessions</p>

              {/* {console.log("in render")}
              {console.log("this.state.response", this.state.response)} */}
              {/* <p>{ "logon_id = "  +  loginInfo.logon_id}</p>
              <p>{ "firstName = "  +  loginInfo.firstName}</p>
              <p>{ "lastName = "  +  loginInfo.lastName}</p>
              <p>{ "host = "  +  loginInfo.role}</p>
              <p>{ "photo = " +   loginInfo.photo}</p>
              <p>{  "user_id = "  +  loginInfo.user_id}</p>
             <p> </p> */}
             
  <Table inverted>
    <Table.Header>
    <Table.Row>
        {/* <Table.HeaderCell>id</Table.HeaderCell> */}
        {/* <Table.HeaderCell>Host id</Table.HeaderCell> */}
        <Table.HeaderCell>Name</Table.HeaderCell>
        {/* <Table.HeaderCell>item_sesn_type</Table.HeaderCell> */}
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Trainer</Table.HeaderCell>
        <Table.HeaderCell>Cost</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

        <Table.Body>
          {/* {console.log("Session results ", sessions)} */}
            {sessions
              .map(session => (
                <Table.Row key={session.id} id = {session.id} >
                {/*  <Table.Cell>{session.id}</Table.Cell>    */}
                {/*  <Table.Cell>{session.people_id}</Table.Cell>    */}
                <Table.Cell>{session.name}</Table.Cell>   
                {/*  <Table.Cell>{session.item_sesn_type}</Table.Cell>    */}
                <Table.Cell>{session.description}</Table.Cell> 

                {/* {console.log("Session results item_date ", session.item_date)}  */}
                  <Table.Cell><Moment format="MM/DD/YYYY HH:mm">
                    {session.item_date}
                </Moment></Table.Cell>  

                  <Table.Cell>{ session.Person.fst_nam + " " + session.Person.lst_nam}</Table.Cell>   
                  <Table.Cell>{"$" + session.cost}</Table.Cell>   
                  {/* <Table.Cell>{session.conn_info}</Table.Cell>    */}
                  <Table.Cell><Button basic color='green' id={"register-"+session.id}  session_conn_info={session.conn_info} onClick={(e) => this.register(session.id, e)}>Register</Button></Table.Cell>   
                  {/* <Table.Cell><Button  basic color='blue' id={"join="+session.id}   href={"/join-session/"+session.conn_info} target="_blank"    session_conn_info={session.conn_info} >Join</Button></Table.Cell>    */}
                  <Table.Cell><Button  basic color='blue' id={"join="+session.id}      session_conn_info={session.conn_info} onClick={(e) => this.join(session.conn_info, e)}>Join</Button></Table.Cell>   
                  <Table.Cell><Button  basic color='red' id={"cancel-"+session.id}     session_conn_info={session.conn_info} onClick={(e) => this.cancel(session.conn_info, e)}>Cancel</Button></Table.Cell>   
                </Table.Row>
              ))}
        </Table.Body>
      </Table>

      </div>
    )
  }
}


export default SessionsForm
