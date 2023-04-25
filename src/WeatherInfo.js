import React from "react";
import Date from "./Date";
import CurrantTemperature from "./CurrantTemperature";

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
                <CurrantTemperature celsius={props.data.temperature} />
              </div>
              <div className="col-6">
                <img src={props.data.iconUrl} alt={props.data.description} />
                <span className="description">{props.data.description}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">Feels like: {props.data.feelsLike}°</div>
            <div className="col">Wind: {Math.round(props.data.wind)} km/h</div>
            <div className="col text-capitalize">
              Humidity: {props.data.humidity}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
