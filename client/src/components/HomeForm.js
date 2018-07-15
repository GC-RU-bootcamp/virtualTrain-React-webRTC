import React, { Component } from 'react'
//import { Button, Modal } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'
import { Container, 
 // Item, 
  Image, 
 // Divider, 
  Grid, Header, List } from 'semantic-ui-react'

class HomeForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { };

  
    console.log("<HomeForm> constructor() state", this.state," props:", this.props, "context:", this.context);

  }

  render(props) {
    // console.log("HomeForm state", this.state);
    // console.log("HomeForm props", this.props);

  
    return (
      <div>           
        <Container fluid>
            <Grid style={{margin: "0.25rem"}} >
              <Grid.Column width={16}>
                <Header as="h2" color={"red"} >Virtual Personal Training</Header>
                <p>Connecting you to live certified training professional</p>
              </Grid.Column>
            </Grid>
            <Grid style={{margin: "0.25rem"}} >
              <Grid.Column width={4}>
                <Image fluid src='./images/supergirl.png'  style={{width:"100%", height: "100%"}} />
              </Grid.Column>
              <Grid.Column width={8} >
                <Header as="h3" color={"red"} >Personal training for</Header>
                <List bulleted>
                <List.Item>Beginners looking to get started</List.Item>
                <List.Item>Physically active individuals looking to take their fitness to the next level.</List.Item>
                </List>
              </Grid.Column>
              {/* <Grid.Column width={1}>eight wide column</Grid.Column> */}
              <Grid.Column width={4}>
                <Image fluid rounded src='./images/Man-pushups.png' style={{width:"100%", height: "100%"}}     />
              </Grid.Column>
            </Grid>
            <Grid style={{margin: "0.25rem"}} >
              <Grid.Column width={10} >
                <Header as="h3" color={"red"} >Guided exercise and advice by a certified personal trainer</Header>
                  <li>One on one personal training</li>
                  <li>Group sessions -- with the privacy of a one on one session</li>
                  <li>No or minimal equipment required</li>
              </Grid.Column>
              {/* <Grid.Column width={1}>eight wide column</Grid.Column> */}
              <Grid.Column width={4}>
                <Image fluid rounded src='./images/1-1-bruce-mars-556415-unsplash.jpg' style={{width:"100%", height: "100%"}}     />
              </Grid.Column>
            </Grid>
            <Grid style={{margin: "0.25rem"}} >
              <Grid.Column width={6}>
                <Image fluid rounded src='./images/girl-virtual-training.png' style={{width:"75%", height: "75%"}}     />
              </Grid.Column>
              <Grid.Column width={10} >
                <Header as="h3" color={"red"} >Privacy and Convenience</Header>
                    <li>All Sessions are only visible between you and your trainer</li>
                    <li>Attend from home or wherever is convenient</li>
                    <li>Find and reserve training that works with your schedule</li>
                    <li>Save time traveling to a gym</li>
              </Grid.Column>
              {/* <Grid.Column width={1}>eight wide column</Grid.Column> */}
            </Grid>
            <Grid style={{margin: "0.25rem"}} >
              <Grid.Column width={10} >
                <Header as="h3" color={"red"} >All types of training available including:</Header>
                  <ul>
                    <li>Aerobic (Endurance) training</li>
                    <li>Strength training</li>
                    <li>Balance and Flexibility</li>
                    <li>Total body</li>
                  </ul>
              </Grid.Column>
              {/* <Grid.Column width={1}>eight wide column</Grid.Column> */}
              <Grid.Column width={6}>
                <Image fluid rounded src='https://media.giphy.com/media/AncktWHjUxeNi/giphy.gif' style={{width:"100%", height: "100%"}}     />
              </Grid.Column>
            </Grid>  
            <Grid style={{margin: "0.25rem"}} >
              <Grid.Column width={16} >
                  <Header as="h6" 
          
                  >
                    © 2018 Überlift ---- Created by Gary Cender, Dave Fischer &amp; Derrick Gill.
                  </Header> 
              </Grid.Column>
            </Grid>   
         </Container>
  
          {/* <div className="container-fluid">
              <div className="row bg-warning rounded pt-2 pb-2 ml-0 mr-0">
                <div className="col-3">
                    <img className="rounded text-center" src="./images/supergirl.png" alt="Bar Neon" width="100%" height="100%" />
                </div>
                <div className="col-6 ">

                  <h4>Personal training for </h4>
                  <ul>
                    <li>Beginners looking to get started</li>
                    <li>Physically active individuals looking to take their fitness to the next level.</li>
                  </ul>
                </div>
                <div className="col-3">
                    <img className="rounded" src="./images/Man-pushups.png" alt="Bar Neon" width="100%" height="100%"/>
                </div>
              </div>

              <hr />

              <div className="row bg-warning rounded pt-2 pb-2  ml-0 mr-0">
                <div className="col-8  ">

                  <h4> Guided exercise and advice by a certified personal trainer</h4>
                  <ul>
                    <li>One on one personal training</li>
                    <li>Group sessions -- with the privacy of a one on one session</li>
                    <li>No or minimal equipment required</li>
                  </ul>
                </div>
                <div className="col-3">
                    <img className="rounded" src="./images/1-1-bruce-mars-556415-unsplash.jpg" alt="Bar Neon" width="100%" height="100%" />
                </div>     
              </div>

              <hr />

              <div className="row bg-warning rounded pt-2 pb-2  ml-0 mr-0">
                  <div className="col-3">
                      <img className="rounded" src="./images/girl-virtual-training.png" alt="Bar Neon" width="100%" height="100%" />
                  </div>   
                <div className="col-9 ">

                  <h4> Privacy and convenience</h4>
                  <ul>
                    <li>All Sessions are only visible between you and your trainer</li>
                    <li>Attend from home or wherever is convenient</li>
                    <li>Find and reserve training that works with your schedule</li>
                    <li>Save time traveling to a gym</li>
                  </ul>
                </div>
              </div>
              <hr />

              <div className="row bg-warning rounded pt-2 pb-2  ml-0 mr-0">
                <div className="col-8 ">

                  <h4> All types of training available including:</h4>
                  <ul>
                    <li>Aerobic (Endurance) training</li>
                    <li>Strength training</li>
                    <li>Balance and Flexibility</li>
                    <li>Total body</li>
                  </ul>
                </div>

                <div className="col-4">
                    <img className="rounded" src="https://media.giphy.com/media/AncktWHjUxeNi/giphy.gif" alt="Bar Neon" width="100%" height="100%" />
                </div>     
              </div>

            <hr />

              <footer className="bg-primary rounded p-2 m-0 text-center text-light">
              © 2018 Überlift ---- Created by Gary Cender, Dave Fischer &amp; Derrick Gill.
              </footer>
            </div> */}
      </div>
    )
  }
}


export default HomeForm
