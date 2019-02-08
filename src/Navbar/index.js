import React from 'react';
import "./style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
      <a href="/">
      <img src="https://i.imgur.com/s0VyTaI.png" width="100" height="50" alt="" />
      </a> 

        <a className="navbar-brand" classname="logo-image" href="/home"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span>
        <i class="fas fa-bars"></i>
    </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/bio">Bio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">News</a>
            </li>
            <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Music 
              <span class="caret">
              <i class="fas fa-caret-down"></i>
              
              </span></a>
              <ul class="dropdown-menu">
                <li><a href="https://itunes.apple.com/ca/album/nyla-live-live/1446125678" target="blank" className="padding-list">Apple Music</a></li>
                <li><a href="https://tidal.com/browse/album/100561702" target="blank" className="padding-list">Tidal</a></li>
                <li><a href="https://open.spotify.com/album/0y01ZZ8BGGcas7gkzlOfRv" target="blank" className="padding-list">Spotify</a></li>
                <li><a href="https://soundcloud.com/nyla-ninjarose" target="blank" className="padding-list">Soundcloud</a></li>
              </ul>
            </li>
          </ul>
            <li className="nav-item">
              <a className="nav-link" href="/photos">Photos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;


