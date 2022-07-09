import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
const List = () => {
  const location = useLocation();

  // console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" className="destInput" />
            </div>
            <div className="listItem">
              <label>Chech In Date</label>
              <input type="text" className="destInput" />
            </div>
          </div>
          <div className="listResults"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
