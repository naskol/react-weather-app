import React, { useState } from "react";

export default function CurrantTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div>
        <strong>{Math.round(props.celsius)}</strong>
        <span class="units">
          <a href="/" className="active">
            °С
          </a>{" "}
          |
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <strong>{Math.round(fahrenheit)}</strong>
        <span class="units">
          <a href="/" onClick={convertToCelsius}>
            °С
          </a>{" "}
          |
          <a href="/" className="active">
            °F
          </a>
        </span>
      </div>
    );
  }
}
