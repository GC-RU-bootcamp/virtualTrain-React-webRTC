

import React from "react";
import HomepageLayout from './HomepageLayout.js';
import Login from './containers/OLD-loginPage';
import { BrowserRouter as Router, Route , Link } from "react-router-dom";

const App = () => (

    <Router>
      <div>
        <Route exact path="/" component={HomepageLayout} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/work" component={Work} />
        
      </div>
    </Router>
);

const Registration = () => (
  <div>
    <Link to="/">
      <p>
        home
      </p>
    </Link>
    <h2>Registration</h2>
  </div>
);


const Work = () => (
  <div>
    <Link to="/">
      <p>
        home
      </p>
    </Link>
    <h2>Work</h2>
  </div>
);




export default App;
