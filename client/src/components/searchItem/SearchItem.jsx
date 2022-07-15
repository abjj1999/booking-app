import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";
function SearchItem({ item }) {
  return (
    <div className="searchItem">
      <img src={item.photo[0]} alt="" className="siImg" />
      <div className="siDes">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTexiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air coditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSub">
          You can cancel later, so look in this great price today!!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}

        <div className="siDetailTexts">
          <span className="siPrice">{item.CheapestPrice}</span>
          <span className="siTax">Include taxes and fees</span>
          <Link to={`/hotel/${item._id}`}>
            <button className="sibtn">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
