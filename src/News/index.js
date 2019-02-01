import React, { Component } from "react";
import "./style.css";

const News = () => {
  return (
    <div className="news container-fluid">
      <div class="row my-4">
        <div class="col-lg-6">
          <img class="img-fluid rounded" src="https://i.imgur.com/4gjLDEA.jpg" alt=""/>
        </div>
        <div class="col-lg-4">
          <h1>Who Were the Schuyler Sisters? Fact and Fiction in ‘Hamilton’</h1>
          <p>In part three of our "Summer of Hamilton" series, New York Times bestselling author L.M. Elliott examines the endearing sisterhood of the Schuyler Sisters.</p>
          <a class="btn btn-primary btn-lg" href="#">Read More</a>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Card One</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Card Two</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Card Three</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
export default News;
