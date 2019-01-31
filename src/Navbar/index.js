import React from 'react';
import "./style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Nyla Sostre</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Bio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Music</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Photos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tour</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;


