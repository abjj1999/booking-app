import React from "react";
import "./searchItem.css";

function SearchItem() {
  return (
    <div className="searchItem">
      <img src="" alt="" className="siImg" />
      <div className="siDes">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTexiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air coditioning
        </span>
        <span className="siFeatures">
          Entire studio * 1 bathroom * 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSub">
          You can cancel later, so look in this great price today!!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTax">Include taxes and fees</span>
          <button className="sibtn">See Availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
