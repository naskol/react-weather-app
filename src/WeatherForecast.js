import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecastReady(true);
    setForecastData(response.data);
  }

  if (forecastReady) {
    return (
      <div className="row">
        <div className="col">
          <div className="frame-forecast">
            <div className="weather-forecast-day">Mon</div>
            <img
              src={`https://openweathermap.org/img/wn/${forecastData[0].weather.icon}@2x.png`}
              alt=" "
            />
            <div className="weather-forecast-temperature">
              <div className="weather-forecast-temperature-min">
                <span className="arrow-down">↓</span>
                {Math.round(forecastData[0].temp.min)}°
              </div>
              <div className="weather-forecast-temperature-max">
                <span className="arrow-up">↑</span>
                {Math.round(forecastData[0].temp.max)}°
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `866a208a73eeff02182218e9441647a1`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading Forecast";
  }
}
