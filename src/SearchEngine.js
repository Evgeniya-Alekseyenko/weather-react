import React, { useState } from 'react';
import axios from 'axios';
import './SearchEngine.css';

import ReactAnimatedWeather from 'react-animated-weather';

export default function SearchEngine(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [description, setDescription] = useState(null);

    function showCity(e) {
        setCity(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
        axios.get(url).then((response) => {
            // console.log(response);
            console.log('desc is', description);

            setDescription({
                temperature: Math.round(response.data.main.temp),
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed,
                desc: response.data.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            });
        });
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    //     axios.get(url).then((response) => {
    //         // console.log(response);
    //         console.log('desc is', description);

    //         setDescription({
    //             temperature: Math.round(response.data.main.temp),
    //             humidity: response.data.main.humidity,
    //             wind: response.data.wind.speed,
    //             desc: response.data.weather[0].description,
    //             icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    //         });
    //     });
    // }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input
                    type='search'
                    placeholder='Search for a city...'
                    onChange={showCity}
                />
                <input className='btn' type='submit' value='Search' />
            </form>
            {description ? (
                <div>
                    <div className='heading'>
                        {city} {description.temperature}ºC
                        <img src={description.icon} alt='weather icon' />
                    </div>
                    <div className='desc'>{description.desc}</div>
                    <ul>
                        <li>Humidity: {description.humidity} %</li>
                        <li>Wind: {description.wind} km/h</li>
                    </ul>
                    <ReactAnimatedWeather
                        icon='PARTLY_CLOUDY_DAY'
                        color='blueviolet'
                        size='50'
                        animate='true'
                    />
                    <ReactAnimatedWeather
                        icon='PARTLY_CLOUDY_DAY'
                        color='blueviolet'
                        size='50'
                        animate='true'
                    />
                    <ReactAnimatedWeather
                        icon='PARTLY_CLOUDY_DAY'
                        color='blueviolet'
                        size='50'
                        animate='true'
                    />
                </div>
            ) : (
                search()
            )}
        </div>
    );
}