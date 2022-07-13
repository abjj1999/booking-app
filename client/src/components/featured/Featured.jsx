import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Austin,Houston,Dallas"
  );

  //console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featureItem">
            <img
              src="https://www.travel-experience-live.com/wp-content/uploads/2013/12/P9200451-1024x768.jpg"
              alt=""
              className="featureImg"
            />
            <div className="featuredTitle">
              <h1>Houston</h1>
              <h2>{data[1]} properties</h2>
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
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featureItem">
            <img
              src="https://www.travel-experience-live.com/wp-content/uploads/2013/12/P9200451-1024x768.jpg"
              alt=""
              className="featureImg"
            />
            <div className="featuredTitle">
              <h1>Dallas</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
