import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setForecastReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setForecastReady(true);
  }

  if (forecastReady) {
    return (
      <div className="row">
        <div className="col">
          <div className="frame-forecast">
            <WeatherForecastDay data={forecastData[0]} />
          </div>
        </div>
        <div className="col">
          <div className="frame-forecast">
            <WeatherForecastDay data={forecastData[1]} />
          </div>
        </div>
        <div className="col">
          <div className="frame-forecast">
            <WeatherForecastDay data={forecastData[2]} />
          </div>
        </div>
        <div className="col">
          <div className="frame-forecast">
            <WeatherForecastDay data={forecastData[3]} />
          </div>
        </div>
        <div className="col">
          <div className="frame-forecast">
            <WeatherForecastDay data={forecastData[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `866a208a73eeff02182218e9441647a1`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });

    return "Loading Forecast";
  }
}
