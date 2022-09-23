/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WeatherForecastDay from './WeatherForecastDay';
import './Forecast.css';
// import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        console.log(response);
        setForecast(response.data.daily);
        setLoaded(true);
        // console.log(response.data);
    }

    if (loaded) {
        console.log(forecast[0]);
        return (
            <div className='forecast'>
                {/* <WeatherForecastDay data={forecast[0]} /> */}

                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className='col' key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    }
                })}

                {/* <div className='card-box'>
                    <p className='card-box__title'>Mon</p>
                    <div className='card-box__info'>
                        <ReactAnimatedWeather
                            icon='CLOUDY'
                            color='blueviolet'
                            size={50}
                        />
                        <div className='card-box__text'>
                            <span>25/18°C</span>
                        </div>
                    </div>
                </div>
                <div className='card-box'>
                    <p className='card-box__title'>Tue</p>
                    <div className='card-box__info'>
                        <ReactAnimatedWeather
                            icon='SLEET'
                            color='blueviolet'
                            size={50}
                        />
                        <div className='card-box__text'>
                            <span>20/15°C</span>
                        </div>
                    </div>
                </div>
                <div className='card-box'>
                    <p className='card-box__title'>Wed</p>
                    <div className='card-box__info'>
                        <ReactAnimatedWeather
                            icon='RAIN'
                            color='blueviolet'
                            size={50}
                        />
                        <div className='card-box__text'>
                            <span>17/13°C</span>
                        </div>
                    </div>
                </div>
                <div className='card-box'>
                    <p className='card-box__title'>Thu</p>
                    <div className='card-box__info'>
                        <ReactAnimatedWeather
                            icon='PARTLY_CLOUDY_DAY'
                            color='blueviolet'
                            size={50}
                        />
                        <div className='card-box__text'>
                            <span>25/18°C</span>
                        </div>
                    </div>
                </div>
                <div className='card-box'>
                    <p className='card-box__title'>Fri</p>
                    <div className='card-box__info'>
                        <ReactAnimatedWeather
                            icon='CLEAR_DAY'
                            color='blueviolet'
                            size={50}
                        />
                        <div className='card-box__text'>
                            <span>25/18°C</span>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    } else {
        let apiKey = '3a94f3778290bfeee61278505dbbe51d';
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
