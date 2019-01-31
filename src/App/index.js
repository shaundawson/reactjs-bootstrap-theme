import React, { Component } from "react";
import "./style.css";
import Navbar from "../Navbar";
import Bio from "../Bio";
import News from "../News";
import Music from "../Music";
import Photos from "../Photos";
import Tour from "../Tour";
import Contact from "../Contact";
import Hero from "../Hero";
import Footer from "../Footer";

const App = () => {
  return (
        <div className="App">
          <Navbar />
          <Hero />
          <Footer />
        </div>
  );
}

export default App;