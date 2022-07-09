import React from "react";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featureItem">
        <img
          src="https://www.travel-experience-live.com/wp-content/uploads/2013/12/P9200451-1024x768.jpg"
          alt=""
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featureItem">
        <img
          src="https://www.travel-experience-live.com/wp-content/uploads/2013/12/P9200451-1024x768.jpg"
          alt=""
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>34 properties</h2>
        </div>
      </div>
      <div className="featureItem">
        <img
          src="https://www.travel-experience-live.com/wp-content/uploads/2013/12/P9200451-1024x768.jpg"
          alt=""
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>New York</h1>
          <h2>145 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
