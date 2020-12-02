import React, { useState } from "react";
import axios from "axios";
import Cloudy from "./cloudy.png";

export default function City(props) {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp)
    setReady(true);
    
  }
  if (ready)  {
  
  return (
    <div className="City row">
      
      <h2 id="city" className="card-title col-sm location">
        {props.city}
      </h2>
      <h2 id="main-temp" className="temp">
        <img id="main-icon" alt="" src={Cloudy} />
        <span id="displayed-temp">
          {Math.round(temperature)}°C
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
  } else {
  const apiKey = "0eff484678d87e85661f08a4a3365c9a";
  const city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Test...!";
}
}
