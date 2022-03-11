import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-1">
        <div className="col-6">
          <div className="clearfix">
            <span className="float-start">
              <WeatherIcon code={props.data.icon} />
            </span>
            <span className="float-start">
              <WeatherTemperature celcius={props.data.temperature} />
            </span>
          </div>
        </div>
        <div className="description col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
