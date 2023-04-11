import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Monday, March 29th",
    temperature: 23,
    description: "Cloudy",
    imgDescription:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg==",
    feelsLike: 20,
    wind: 10,
    humidity: 50,
  };

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
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <div className="frame">
              <div className="overmain">
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>{weatherData.date}</li>
                </ul>
              </div>
              <div className="row">
                <div className="d-flex weather-temperature">
                  <div className="col-1"></div>
                  <div className="col-4">
                    <strong>{weatherData.temperature}</strong>
                    <span class="units">
                      <a href="/" className="active">
                        °С
                      </a>{" "}
                      |<a href="/">°F</a>
                    </span>
                  </div>
                  <div className="col-6">
                    <img
                      src={weatherData.imgDescription}
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
                <div className="col">Feels like: {weatherData.feelsLike}°</div>
                <div className="col">Wind: {weatherData.wind}km/h</div>
                <div className="col">Humidity: {weatherData.humidity}%</div>
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
            </a>
            by Anastasiia Balan
          </small>
        </div>
      </div>
    </div>
  );
}
