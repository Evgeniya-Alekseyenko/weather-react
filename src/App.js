import './App.css';

import SearchEngine from './SearchEngine/SearchEngine';

export default function App() {
    return (
        <div className='App'>
            <div className='weather_header'>
                {/* <img src='./img/undraw_react.svg' alt='logo' /> */}
                <h1>Weather App</h1>
            </div>
            <div>
                <SearchEngine defaultCity='Kharkiv' />
            </div>
        </div>
    );
}
