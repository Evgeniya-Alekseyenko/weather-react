import './Forecast.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast() {
    return (
        <div className='forecast'>
            <div className='card-box'>
                <p className='card-box__title'>Mon</p>
                <div className='card-box__info'>
                    <ReactAnimatedWeather
                        icon='CLOUDY'
                        color='blueviolet'
                        size='50'
                        animate='true'
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
                        size='50'
                        animate='true'
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
                        size='50'
                        animate='true'
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
                        size='50'
                        animate='true'
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
                        size='50'
                        animate='true'
                    />
                    <div className='card-box__text'>
                        <span>25/18°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
