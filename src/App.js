import './App.css';

import SearchEngine from './SearchEngine/SearchEngine';

export default function App() {
    return (
        <div>
            <div className='App'>
                <div className='weather_header'>
                    <img src='/img/undraw_react.svg' alt='logo' width={80} />
                    <h1>Weather App</h1>
                </div>
                <div>
                    <SearchEngine defaultCity='Kharkiv' />
                </div>
            </div>
            <div className='footer-link'>
                <img
                    class='img-git'
                    src='img/kisspng-github-bitbucket-fork-software-repository-icons-for-windows-github-logo-5ab0faded05d05.5387371715215479988535.png'
                    width={50}
                    alt='github icon'
                />
                <a
                    href='https://github.com/Evgeniya-Alekseyenko/weather-react.git'
                    class='link-git'
                    target='_blank'
                    rel='noreferrer'
                >
                    <b>Open-sourse code</b>
                    <span class='name_link'>
                        by Yevgeniya Alekseyenko with ❤
                    </span>
                </a>
            </div>
        </div>
    );
}
