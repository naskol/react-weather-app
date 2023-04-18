import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: "https://openweathermap.org/img/w/0${icon}.png",
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = `866a208a73eeff02182218e9441647a1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="frame" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
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

            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
