import React from "react";
import Cloudy from "./cloudy.png";

export default function Forecast() {
  return <div>
    <p id="three-hour-forecast">3 Hour Forecast<br/><img alt="" src={Cloudy} /><img alt="" src={Cloudy} /><img alt="" src={Cloudy} /><img alt="" src={Cloudy} /><img alt="" src={Cloudy} /></p>
  
  </div>
  ;
}
