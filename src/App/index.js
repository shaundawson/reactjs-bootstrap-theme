import React, { Component } from "react";
import "./style.css";
import Navbar from "../Navbar";
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