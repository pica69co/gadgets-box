import React, { useEffect, useState } from 'react'

import style from '../components/Weather.module.css'
import search from '../assets/images/search.png'
import rain from '../assets/images/rain.png'
import humidity from '../assets/images/humidity.png'
import wind from '../assets/images/wind.png'
import clouds from '../assets/images/clouds.png'
import drizzle from '../assets/images/drizzle.png'
import mist from '../assets/images/mist.png'
import snow from '../assets/images/snow.png'
import clear from '../assets/images/clear.png'

const { REACT_APP_API_KEY, REACT_APP_API_URL} = process.env

const Weather = () => {
    const [city, setCity] = useState('')
    const [detail, setDetail] = useState(
        {
            city:'',
            temperature:0,
            humidity:0,
            wind:0,    
        })
    
  const API_KEY=REACT_APP_API_KEY
  const API_URL=REACT_APP_API_URL  
   
  const fetchWeather = async (city) => {
    const searchCity = city || 'bangalore'
    const response = await fetch(`${API_URL}${searchCity}&appid=${API_KEY}`)
    const data = await response.json()
    setDetail(
        {...detail, 
        city:data?.name, 
        temperature:data?.main.temp, 
        humidity:data?.main.humidity, 
        wind:data?.wind.speed,
        conditions:data?.weather[0].main,
        }
        )
  }
  useEffect(() => {
    fetchWeather(city)
  }, [])
  
  const handleCitySearch = (event) => {
    setCity(event.target.value)

  }
  const hangleClick = () => {
    fetchWeather(city)
  }
    console.log(city);
    return (
    <div className={style.container}>
        <div className={style.card}>
            <div className={style.search}>
                <input type='text' placeholder='enter city name'
                spellCheck='false' onChange={handleCitySearch}
                />
                <button
                onClick={hangleClick}
                ><img src={search} alt='search-icon'/></button>
            </div>
            <div className={detail.length ? style.weather : style.weather1} >
                
                <img src={ 
                    detail?.conditions === 'Clouds' 
                    ? clouds 
                    : detail?.conditions === 'Rain'
                    ? rain
                    : detail?.conditions === 'Drizzle'
                    ? drizzle
                    : detail?.conditions === 'Clear'
                    ? clear
                    : detail?.conditions === 'Mist'
                    ? mist
                    : detail?.conditions === 'Snow' 
                    ? snow
                    : clear } alt={`icon-${detail?.conditions}`} className={style.weatherIcon}/>
               <h1 className={style.temp}>{Math.round(detail?.temperature)} °C</h1>
                <h2 className={style.city}>{detail?.city}</h2>
                <div className={style.details}>
                    <div className={style.col}>
                        <img src={humidity} alt='humidity-icon'/>
                        <div>
                            <p className={style.humidity}>{detail?.humidity} %</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className={style.col}>
                        <img src={wind} alt='wind-icon'/>
                        <div>
                            <p className={style.wind}>{detail?.wind} Km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Weather