import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from 'react-router-dom'
  
  import Bio from "./Bio";
  import News from "./News";
  import Music from "./Music";
  import Photos from "./Photos";
  import Tour from "./Tour";
  import Contact from "./Contact";
  import Hero from "./Hero";
 
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))


