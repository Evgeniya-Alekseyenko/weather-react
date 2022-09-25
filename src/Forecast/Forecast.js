/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Forecast.css';
import WeatherForecastDay from './WeatherForecastDay';

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className='forecast'>
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className=' m-3 forecast-card' key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    }
                })}
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
