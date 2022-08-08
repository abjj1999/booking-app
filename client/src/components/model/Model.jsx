import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchCont } from "../../context/SearchCont";
import useFetch from "../../hooks/useFetch";
import "./model.css";

function Model({ setOpenModel, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchCont);

  const getDatesRanges = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const allDates = getDatesRanges(dates[0].startDate, dates[0].endDate);

  //check if dates are avalible
  const isAvailable = (roomNum) => {
    for (var i = 0; i < roomNum.unavailableDate.length; i++) {
      console.log(roomNum.unavailableDate[i]);
    }
    const isFound = roomNum.unavailableDate.some((date) => {
      allDates.includes(new Date(date).getTime());
    });

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const navigate = useNavigate();
  const handleClick = async () => {
    //console.log("Hllo");
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          navigate("/");
          console.log(res.data);
        })
      );
      setOpenModel(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="reserve" key={hotelId}>
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpenModel(false)}
        />
        <span>Select your room!</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">
                <b>{item.price}$$</b>
              </div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNum) => (
                <div className="room" key={roomNum._id}>
                  <label>{roomNum.number}</label>
                  <input
                    type="checkbox"
                    value={roomNum._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNum)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
}

export default Model;
