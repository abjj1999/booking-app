import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">BOOK NOW!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location -- 500m from center
          </span>
          <span className="hotelPriceHL">
            Book a stay over $114 at this property and get a free airport ride.
          </span>

          <div className="hotelImages">
            {/* {photos.map((photo) => {
              <div className="hotelImgWrapper">
                <img src={photo.src} className="hotelImg" />
              </div>;
            })} */}
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                dignissimos magni, illum doloremque reprehenderit tempore
                deleniti necessitatibus illo iure est modi nulla corporis,
                laboriosam nobis ratione excepturi assumenda molestiae numquam!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat ipsam autem corrupti impedit sit modi, eveniet maiores
                corporis doloremque sint quaerat temporibus molestias, maxime
                rerum? Doloremque illum natus sed adipisci!
              </p>
            </div>
            <div className="hotelPrice">
              <h1>Perfect for 9-night stay!</h1>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
                alias sit deleniti provident facere cumque sapiente atque,
                ducimus fugit doloremque nobis numquam ipsum enim quos, ex
                recusandae libero animi totam.
              </span>
              <h2>
                <b>$945</b>(9 Nights)
              </h2>
              <button>Reserve or Book now!!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
