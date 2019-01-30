import React, { Component } from "react";
import "./style.css";
import Navbar from "../Navbar";
import Hero from "../Hero";


const App = () => {
  return (
      <div className="App">
        <Navbar />
        <Hero />
      </div>
  );
}

export default App;