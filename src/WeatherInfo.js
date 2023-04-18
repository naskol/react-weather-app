import React from "react";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <>
      <div className="Weather">
        <div className="frame">
          <div className="overmain">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <Date date={props.data.date} />
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="d-flex weather-temperature">
              <div className="col-2"></div>
              <div className="col-4">
                <strong>{Math.round(props.data.temperature)}</strong>
                <span class="units">
                  <a href="/" className="active">
                    °С
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
              <div className="col-6">
                <img src={props.data.iconUrl} alt={props.data.description} />
                <span className="description">{props.data.description}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              Feels like: {Math.round(props.data.feelsLike)}°
            </div>
            <div className="col">Wind: {Math.round(props.data.wind)} km/h</div>
            <div className="col text-capitalize">
              Humidity: {props.data.humidity}%
            </div>
          </div>
        </div>
        <div className="frame">
          <div className="weather-forecast"></div>
        </div>
        <small className="developer-information">
          <a
            href="https://github.com/naskol/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          <string> by Anastasiia Balan</string>
        </small>
      </div>
    </>
  );
}
