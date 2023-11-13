// src/components/Weather.js
import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const getWeather = async () => {
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather ? (
        <div>
          <h3> City: {weather.name}</h3>
          <p>Temperature: {Math.round(((weather.main.temp - 32) * 5) / 9)} </p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <div>
          <h3> City: .... </h3>
          <p>Temperature: .....</p>
          <p>Weather: ....</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
  

