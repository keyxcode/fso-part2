import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [weatherIconLink, setWeatherIconLink] = useState(null);

  const capital = country["capital"][0];

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&mode=json&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setWeather(res.data);
        setWeatherIconLink(
          `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
        );
      });
  }, []);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>{weather ? `Temprature: ${weather.main.temp} Celcius` : ""}</div>
      <img alt="weather-icon" src={weatherIconLink ? weatherIconLink : ""} />
      <div>{weather ? `Wind: ${weather.wind.speed} m/s` : ""}</div>
    </div>
  );
};

export default Weather;
