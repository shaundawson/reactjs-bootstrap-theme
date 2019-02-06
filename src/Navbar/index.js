import React from 'react';
import "./style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
      <a href="/">
      <img src="https://i.imgur.com/s0VyTaI.png" width="100" height="50" alt="" />
      </a> 

        <a className="navbar-brand" href="/"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/bio">Bio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/music">Music</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/photos">Photos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tour">Tour</a>
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


