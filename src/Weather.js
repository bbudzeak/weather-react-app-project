import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <form className="mb-4">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
              />
            </div>
            <div className="col-6">
              <input type="submit" value="Search" className="btn btn-primary" />
              <input
                type="button"
                className="btn btn-primary"
                value="Search Current Location"
              />
            </div>
          </div>
        </form>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 08:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_s_rain.png"
            alt="snow"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 50%</li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
