import React from 'react';
import loaderImg from "./loader.gif";
import './PageLoader.css';
const PageLoader = () => {
    return (
        <div className="loading-container">
        <div className="loading">
          <img src={loaderImg} alt=""></img>
        </div>
      </div>
    );
};

export default PageLoader;