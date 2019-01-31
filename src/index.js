import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from 'react-router-dom'
  
  import Bio from "./Bio";
  import News from "./News";
  import Music from "./Music";
  import Photos from "./Photos";
  import Tour from "./Tour";
  import Contact from "./Contact";
  import Hero from "./Hero";
 
  export default () => (
    <Router>
        <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/bio" component={Bio} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/photos" component={Photos} />
        <Route path="/tour" component={Tour} />
        <Route path="/contact" component={Contact} />
        </Switch>
    </Router>
    );



ReactDOM.render(<App />, document.getElementById("root"));
