import React, { Component } from "react";
import "./style.css";
import Iframe from 'react-iframe';

const Photos = () => {
  return (
    <div className="photos">
    <div class="header-name">
    <h1 class="mb-0">@
  <span class="text-primary">nylanana</span>
    </h1></div>
    <section>
    <Iframe url="https://snapwidget.com/embed/657237"
        width="100%"
        height="900px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allow="encrypted-media"
        overflow="hidden"
        scrolling="no"
        allowFullScreen/>
        </section>
    </div>
  );
};
export default Photos;
