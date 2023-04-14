import React, { useState } from "react";
import axios from "axios";
import Date from "./Date";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form className="frame">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city..."
                      className="form-control"
                      autoComplete="off"
                      autoFocus="on"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div className="frame">
                <div className="overmain">
                  <h1>{weatherData.city}</h1>
                  <ul>
                    <li>
                      <Date date={weatherData.date} />
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="d-flex weather-temperature">
                    <div className="col-2"></div>
                    <div className="col-4">
                      <strong>{Math.round(weatherData.temperature)}</strong>
                      <span class="units">
                        <a href="/" className="active">
                          °С
                        </a>{" "}
                        |<a href="/">°F</a>
                      </span>
                    </div>
                    <div className="col-6">
                      <img
                        src="https://openweathermap.org/img/w/{weatherData.icon}.png"
                        alt={weatherData.description}
                      />
                      <span className="description">
                        {weatherData.description}
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col">
                    Feels like: {Math.round(weatherData.feelsLike)}°
                  </div>
                  <div className="col">
                    Wind: {Math.round(weatherData.wind)}km/h
                  </div>
                  <div className="col text-capitalize">
                    Humidity: {weatherData.humidity}%
                  </div>
                </div>
              </div>
              <div className="frame">
                <div className="weather-forecast"></div>
              </div>
            </div>
            <small className="developer-information">
              <a
                href="https://github.com/naskol/react-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>{" "}
              by Anastasiia Balan
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `866a208a73eeff02182218e9441647a1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>;
  }
}
