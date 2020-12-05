import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
return(
    <div>
        <div className="WeatherInfo">
        <h2 id="city" className="card-title col-sm location">
        {props.data.city}
      </h2>
      <h2 id="main-temp" className="temp">
          <WeatherIcon code={props.data.icon} />
        <span id="displayed-temp">
          {Math.round(props.data.temperature)}°C
        </span>
        <a href="/" className="col" id="change-to-C">
          °C
        </a>
        <a href="/" id="change-to-F">
          °F
        </a> 
        
        <p className="description text-capitalize">
          {props.data.description}
        </p>
       </h2>
       <FormatDate date={props.data.date} />
      </div>
      <div className="row">
    </div>
      <div className="row second-row">
      <h5 className="col pressure">
        Pressure:
        <br />
        <span id="pressure-value">{props.data.pressure}</span>
      </h5>
      <h5 className="col humidity">
        Humidity:
        <br />
        <span id="humidity-value">{props.data.humidity}</span>%
      </h5>

      <h5 className="col wind-speed">
        Wind:
        <br />
        <span id="wind-value">{Math.round(props.data.wind)}</span> m/s
      </h5>
</div>
</div>
);
}