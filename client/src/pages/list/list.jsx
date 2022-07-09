import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
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
              <input
                placeholder={destination}
                type="text"
                className="destInput"
              />
            </div>
            <div className="listItem">
              <label>Chech In Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResults">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
