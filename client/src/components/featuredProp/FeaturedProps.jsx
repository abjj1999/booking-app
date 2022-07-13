import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProps.css";

function FeaturedProps() {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photo[0]} alt="" className="fbImg" />
              <span className="fbName">{item.name}</span>
              <span className="fbCity">{item.city}</span>
              <span className="fbPrice">Stating from {item.CheapestPrice}</span>
              {item.rating && (
                <div className="fbRating">
                  <button>8.9</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProps;
