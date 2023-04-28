import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    console.log(day);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-day">{day()}</div>
      <img
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.weather[0].description}
        width="40"
      />
      <div className="weather-forecast-temperature">
        <div className="weather-forecast-temperature-min">
          <span className="arrow-down">↓</span>
          {Math.round(props.data.temp.min)}°
        </div>
        <div className="weather-forecast-temperature-max">
          <span className="arrow-up">↑</span>
          {Math.round(props.data.temp.max)}°
        </div>
      </div>
    </div>
  );
}
