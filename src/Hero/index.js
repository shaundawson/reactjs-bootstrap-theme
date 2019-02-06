import React, { Component } from "react";
import "./style.css";

const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div id="social" className="col-md-12">
          <div id="instagram">
            <a href="https://www.instagram.com/nylanana/" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a>

          </div>
          <div id="facebook">
            <a href="https://www.facebook.com/Nylaninja/" target="_blank"><i className="fab fa-facebook" aria-hidden="true"></i></a>
          </div>
          <div id="itunes">
            <a href="#" target="_blank"><i className="fab fa-itunes" aria-hidden="true"></i></a>
          </div>
          <div id="spotify">
          <a href="#" target="_blank"><i className="fab fa-spotify" aria-hidden="true"></i></a>
          </div>
          <div id="twitter">
          <a href="https://www.twitter.com/nylaninjarose/" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
