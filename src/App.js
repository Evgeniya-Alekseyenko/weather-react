import './App.css';

import ReactAnimatedWeather from 'react-animated-weather';
import SearchEngine from './SearchEngine';

export default function App() {
    return (
        <div className='App'>
            <div className='weather_header'>
                <ReactAnimatedWeather
                    icon='CLEAR_DAY'
                    color='blueviolet'
                    size='50'
                    animate='true'
                />
                <h1>Weather App</h1>
            </div>
            <div>
                <SearchEngine defaultCity='Kharkiv' />
            </div>
        </div>
    );
}
