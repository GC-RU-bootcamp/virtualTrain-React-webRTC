import React, { Component } from 'react'
//import { Button, Modal } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'

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
    
            {/* <Form> */}
              <p>Home Page FORM</p>
              {/* <Form.Field>
                <label>Logon ID</label>
                <input placeholder='Username' name="username" onChange={this.props.textHandler}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" name="password"  onChange={this.props.textHandler} />
              </Form.Field> 
            </Form> */}
          <div className="container-fluid">
            
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
            </div>
      </div>
    )
  }
}


export default HomeForm
