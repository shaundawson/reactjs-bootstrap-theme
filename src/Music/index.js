import React, { Component } from "react";
import "./style.css";

const Music = () => {
  return (
    <div className="Music">
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Itunes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Spotify</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Tidal</a>
  </li>
</ul>
    </div>
  );
};
export default Music;
