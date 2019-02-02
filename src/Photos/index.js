import React, { Component } from "react";
import "./style.css";
import Iframe from 'react-iframe';

const Photos = () => {
  return (
    <div className="photos">
    <Iframe url="https://snapwidget.com/embed/654603"
        width="100%"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        overflow="hidden"
        allow="encrypted-media"
        allowFullScreen/>
    </div>
  );
};
export default Photos;
