import React from "react";
import CountUp from "react-countup";
import "./cards.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <>
      <div className="container">
        <h1>Corona Tracker</h1>
        <div className="numbers">
          <div className="card-confirmed">
            <h3>Confirmed</h3>
            <CountUp end={confirmed.value} separator="," />
          </div>
          <div className="card-recovered">
            <h3>Recovered</h3>
            <CountUp end={recovered.value} />
          </div>
          <div className="card-deaths">
            <h3>Deaths</h3>
            <CountUp end={deaths.value} separator="," />
          </div>
        </div>
        <div className="date-track">
          <h4>{new Date(lastUpdate).toDateString()}</h4>
        </div>
      </div>
    </>
  );
};

export default Cards;
