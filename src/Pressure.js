import React from "react";

export default function Pressure(props) {
  return (
    <div className="row second-row">
      <h5 className="col pressure">
        Pressure:
        <br />
        <span id="pressure-value">1000</span>
      </h5>
      <h5 className="col humidity">
        Humidity:
        <br />
        <span id="humidity-value">80</span>%
      </h5>

      <h5 className="col wind-speed">
        Wind:
        <br />
        <span id="wind-value">10</span> mph
      </h5>
    </div>
  );
}
