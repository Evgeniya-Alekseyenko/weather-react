import React from 'react';

import './CurrentTime.css';

export default function CurrentTime() {
    let date = new Date();

    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let currentYear = date.getFullYear();
    let currentDay = days[date.getDay()];
    let currentMonth = months[date.getMonth()];

    let hour = date.getHours();
    let minutes = date.getMinutes();
    if (hour < 10) {
        hour = `0${hour}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
        <div className='currentTime'>
            <li>
                <span>
                    {currentDay} {hour}:{minutes} {currentMonth} {currentYear}
                </span>
            </li>
        </div>
    );
}
