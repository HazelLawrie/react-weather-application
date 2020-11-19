import React from "react";

export default function Temp(props) {
  let fahrenheit = (props.temperature * 9) / 5 + 32;

  return (
    <div className="row">
      <h2 id="main-temp" className="card-text col-sm temp">
        <img id="main-icon" src="#" alt="" />
        <span id="displayed-temp">
          {props.temperature} / {fahrenheit}
        </span>
        <a href="/" className="col" id="change-to-C">
          °C
        </a>
        <a href="/" id="change-to-F">
          °F
        </a>
      </h2>
    </div>
  );
}
