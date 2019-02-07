import React, { Component } from "react";
import "./style.css";

const News = () => {
  return (
    <div className="news container-fluid">
      <div class="row my-4">
        <div class="col-lg-8">
          <img class="img-fluid rounded" src="https://i.imgur.com/4gjLDEA.jpg" alt=""/>
        </div>
        <div class="col-lg-3">
          <h2>BWW Review: HAMILTON Is Here and Meets the Hype at Dr. Phillips Center</h2>
          <p><i>Broadway World - Jan 25, 2019 </i></p>
          <p class="card-text">You don't need me to tell you whether HAMILTON is worth seeing. It's the most talked-about phenomenon in the history of Broadway. It won 11 Tonys, a Grammy, and the freakin' Pulitzer for creator Lin-Manuel Miranda..</p>
          <a class="btn btn-primary btn-lg" href="https://www.broadwayworld.com/orlando/article/BWW-Review-HAMILTON-Is-Here-and-Meets-the-Hype-at-Dr-Phillips-Center-20190125" target="blank">Read More</a>
        </div>


        <div class="row">
        
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Who Were the Schuyler Sisters? Fact and Fiction in 'Hamilton'</h2>
              <p><i>DC Metro Theater Arts - Jul 10, 2018 </i></p>
              <p class="card-text">In part three of our "Summer of Hamilton" series, New York Times bestselling author L.M. Elliott examines the endearing sisterhood of the Schuyler Sisters.</p>
            </div>
            <div class="card-footer">
              <a href="https://dcmetrotheaterarts.com/2018/07/10/who-were-the-schuyler-sisters-fact-and-fiction-in-hamilton/" target="blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Pulitzer-winning ‘Hamilton’ at Broward Center lives up to the hype</h2>
            <p><i>Miami Herald - Dec 20, 2018 </i></p>
            <p class="card-text">Though this may be preaching to the choir — or to the uncounted fans who have helped transform “Hamilton” from a groundbreaking piece of musical theater into an enduring cultural phenomenon — Lin-Manuel Miranda’s Pulitzer Prize-winning show really is a work of genius.</p>
          </div>
          <div class="card-footer">
            <a href="https://www.miamiherald.com/entertainment/performing-arts/article223364860.html" target="blank" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>



        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Hamilton Cast Revolt at 1st Ave</h2>
              <p><i>Music in Minnesota - Sep 26, 2018 </i></p>

              <p class="card-text">Hamilton Cast Invades 1st Ave with “We, The Revolution” show raising money for BCEFA with Ashley Támar Davis</p>
            </div>
            <div class="card-footer">
              <a href="https://www.musicinminnesota.com/hamilton-cast-revolt-at-1st-ave/" target="blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>



        <div class="col-md-4 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Portland charms 'Hamilton' cast members on tour</h2>
            <p><i>OregonLive.com - Apr 5, 2018 </i></p>

            <p class="card-text">Hamilton Cast Invades 1st Ave with “We, The Revolution” show raising money for BCEFA with Ashley Támar Davis</p>
          </div>
          <div class="card-footer">
            <a href="https://www.oregonlive.com/portland/2018/04/portland_charms_hamilton_cast.html" target="blank" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>





        </div>
      </div>
      </div>


  );
};
export default News;
