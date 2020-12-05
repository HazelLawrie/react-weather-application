import React, { useState } from "react";
import axios from "axios";
import Search from "./search-symbol.png";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState( {ready: false} );
  const [city, setCity] = useState(props.defaultCity);

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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready)  {
  return (
    <div className="Weather">
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
      <WeatherInfo data={weatherData} />
    </div>
  );
  } else {
    
    search();
  return "Test...!";
}
}
