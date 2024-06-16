import React, { useState, useEffect } from 'react';
import './App.css'; 
import axios from 'axios';
import LocationInput from './LocationInput';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  const fetchWeather = async (city) => {
    try {
      const apiKey = '25b730979140eaab56c1a8860116b811';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await axios.get(apiUrl);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <LocationInput setCity={setCity} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default App;
