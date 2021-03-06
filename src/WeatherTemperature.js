import React, { useState} from "react";

export default function WeatherTemerpature(props) {
      const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

if (unit === "celsius") {
return ( <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C {" "}
        </span>
        <a href="/" className="col" id="change-to-C" onClick={showCelsius}>
          °C
        </a>
        <a href="/" id="change-to-F" onClick={showFahrenheit}>
          °F
        </a> 
      </div>
    );
} else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="unit">
          °F {" "}
        </span>
          <a href="/" className="col" id="change-to-C" onClick={showCelsius}>
          °C
        </a>
        <a href="/" id="change-to-F" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  }
}