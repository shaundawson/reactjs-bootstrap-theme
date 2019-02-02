import React, { Component } from "react";
import "./style.css";

const News = () => {
  return (
    <div className="news container-fluid">
      <div class="row my-4">
        <div class="col-lg-4">
          <img class="img-fluid rounded" src="https://i.imgur.com/4gjLDEA.jpg" alt=""/>
        </div>
        <div class="col-lg-6">
          <h4>Who Were the Schuyler Sisters? Fact and Fiction in ‘Hamilton’</h4>
          <p>In part three of our "Summer of Hamilton" series, New York Times bestselling author L.M. Elliott examines the endearing sisterhood of the Schuyler Sisters.</p>
          <a class="btn btn-primary btn-secondary" href="#">Read More</a>
        </div>
      </div>
      </div>


  );
};
export default News;
