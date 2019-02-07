import React, { Component } from "react";
import "./style.css";
import Iframe from 'react-iframe';

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
            <a href="https://itunes.apple.com/ca/album/nyla-live-live/1446125678" target="_blank"><i className="fab fa-itunes" aria-hidden="true"></i></a>
          </div>
          <div id="spotify">
          <a href="https://open.spotify.com/album/0y01ZZ8BGGcas7gkzlOfRv" target="_blank"><i className="fab fa-spotify" aria-hidden="true"></i></a>
          </div>
          <div id="twitter">
          <a href="https://www.twitter.com/nylaninjarose/" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
        <Iframe url="https://www.bandsintown.com/artist/nylaninjarose/track_button?size=small&display_tracker_count=true&text_color=%23FFFFFF&background_color=%2300B4B3&hover_color=%2300908f"
        width="100%"
        height="30px"
        id="myId"
        className="bandsintown"
        display="initial"
        position="relative"
        overflow="hidden"
        allowFullScreen/>
      </div>
    </div>
  );
};
export default Hero;
