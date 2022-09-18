import React, { useState } from 'react';
import './SearchEngine.css';

export default function Fahrenheit(props) {
    const [unit, setUnit] = useState('celsius');

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }
    if (unit === 'celsius') {
        return (
            <h2>
                <span className='unit-heading'>
                    {Math.round(props.celsius)}°C
                </span>
                <span className='units'>
                    <a href='/' className='unit' onClick={showFahrenheit}>
                        °F
                    </a>
                </span>
            </h2>
        );
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
            <h2>
                <span className='unit-heading'>{Math.round(fahrenheit)}°F</span>
                <span className='units'>
                    <a href='/' className='unit' onClick={showCelsius}>
                        °C
                    </a>
                </span>
            </h2>
        );
    }
}
