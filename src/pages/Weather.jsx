import React, { useEffect, useState } from "react";

import style from "../components/Weather.module.css";
import search from "../assets/images/search.png";
import rain from "../assets/images/rain.png";
import humidity from "../assets/images/humidity.png";
import wind from "../assets/images/wind.png";
import clouds from "../assets/images/clouds.png";
import drizzle from "../assets/images/drizzle.png";
import mist from "../assets/images/mist.png";
import snow from "../assets/images/snow.png";
import clear from "../assets/images/clear.png";
import Forecast from "../components/Forecast/Forecast";

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

const Weather = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState({
    city: "",
    temperature: 0,
    humidity: 0,
    wind: 0,
  });
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = REACT_APP_API_KEY;
  const API_URL = REACT_APP_API_URL;

  const fetchWeather = (city) => {
    try {
      const searchCity = city;
      setLoading(true);

      const weatherFetch = fetch(`${API_URL}${searchCity}&appid=${API_KEY}`);

      const forecastFetch = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${searchCity}&appid=${API_KEY}`
      );

      Promise.all([weatherFetch, forecastFetch])
        .then(async (response) => {
          const data = await response[0].json();
          const forecastResponse = await response[1].json();

          setDetail({
            ...detail,
            city: data?.name,
            temperature: data?.main.temp,
            humidity: data?.main.humidity,
            like: data?.main.feels_like,
            wind: data?.wind.speed,
            conditions: data?.weather[0].main,
            weather: data?.weather[0].description,
          });

          setForecast({ ...forecastResponse });
          setLoading(false);
          setError(false);
        })
        .catch(setError(true));
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleCitySearch = (event) => {
    setCity(event.target.value);
  };
  const hangleClick = () => {
    fetchWeather(city);
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.search}>
          <input
            type="text"
            placeholder="enter city name"
            spellCheck="false"
            onChange={handleCitySearch}
          />
          <button onClick={hangleClick}>
            <img src={search} alt="search-icon" />
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && (
          <p
            style={{
              color: "red",
              background: "#e5befff",
              width: "fit-content",
              justifyContent: "center",
            }}
          >
            Uppss! Something went wrong, Try again!
          </p>
        )}

        {detail.city | !error && (
          <div className={detail.length ? style.weather : style.weather1}>
            <img
              src={
                detail?.conditions === "Clouds"
                  ? clouds
                  : detail?.conditions === "Rain"
                  ? rain
                  : detail?.conditions === "Drizzle"
                  ? drizzle
                  : detail?.conditions === "Clear"
                  ? clear
                  : detail?.conditions === "Mist"
                  ? mist
                  : detail?.conditions === "Snow"
                  ? snow
                  : clear
              }
              alt={`icon-${detail?.conditions}`}
              className={style.weatherIcon}
            />
            <h1 className={style.temp}>{Math.round(detail?.temperature)}°C</h1>
            {/* <h4 >{detail.weather}</h4> */}
            <h4>Feels Like: {Math.round(detail?.like)}°C</h4>
            <h2 className={style.city}>{detail?.city}</h2>
            <div className={style.details}>
              <div className={style.col}>
                <img src={humidity} alt="humidity-icon" />
                <div>
                  <p className={style.humidity}>{detail?.humidity} %</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className={style.col}>
                <img src={wind} alt="wind-icon" />
                <div>
                  <p className={style.wind}>{detail?.wind} Km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="daily">
      {detail.city && forecast && !error && (
        <Forecast data={forecast} loading={loading} />
      )}
      </div>       
      
    </div>
  );
};

export default Weather;
