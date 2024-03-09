import './App.css';
import { useState } from 'react';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import Forecast from './components/forecast/forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);


  const onSearchChange = (search) => {
    const [lat, lon] = search.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: search.label, ...weatherResponse });
        setforecast({ city: search.label, ...forecastResponse });

      })
      .catch((error) => console.log(error));

    console.log(search);
  }

  console.log("currentWeather : ", currentWeather);
  console.log("forecast : ", forecast);

  return (
    <div className="container">
      <Search onSearchChange={onSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
