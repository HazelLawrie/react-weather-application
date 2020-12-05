import React, { useState } from "react";
import axios from "axios";
import Search from "./search-symbol.png";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState( {ready: false} );
  const [setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000)
    });
  }

    function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0eff484678d87e85661f08a4a3365c9a";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
  }

  if (weatherData.ready)  {
  return (
    <div>
    <div className="City">
      <form onSubmit={handleSubmit} id="form-all">
        <div className="input-group">
          <input
            id="input"
            type="search"
            className="form-control"
            placeholder="Enter City..."
            autoComplete="on"
            onChange={handleCityChange}
          />
          <span className="input-group-btn">
            <button id="button" className="btn btn-default" type="submit">
              <img id="search-button-image" src={Search} alt="" />
            </button>
          </span>
        </div>
      </form>
  
      <h2 id="city" className="card-title col-sm location">
        {weatherData.city}
      </h2>
      <h2 id="main-temp" className="temp">
        <img className="text-capitalize" id="main-icon" alt={weatherData.description} src={Search} />
        <span id="displayed-temp">
          {Math.round(weatherData.temperature)}°C
        </span>
        <a href="/" className="col" id="change-to-C">
          °C
        </a>
        <a href="/" id="change-to-F">
          °F
        </a> 
        
        <p className="description text-capitalize">
          {weatherData.description}
        </p>
       </h2>
       {weatherData.date.getDay()}
      </div>
      <div className="row">
    </div>
      <div className="row second-row">
      <h5 className="col pressure">
        Pressure:
        <br />
        <span id="pressure-value">{weatherData.pressure}</span>
      </h5>
      <h5 className="col humidity">
        Humidity:
        <br />
        <span id="humidity-value">{weatherData.humidity}</span>%
      </h5>

      <h5 className="col wind-speed">
        Wind:
        <br />
        <span id="wind-value">{Math.round(weatherData.wind)}</span> m/s
      </h5>
    </div>
    </div>
  );
  } else {
    const apiKey = "0eff484678d87e85661f08a4a3365c9a";
    let city = "Edinburgh";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    search();
  return "Test...!";
}
}
