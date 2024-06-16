// WeatherDisplay.js

import React from 'react';
import './WeatherDisplay.css'; // Import WeatherDisplay component CSS
import moment from 'moment';

const WeatherDisplay = ({ weather }) => {
  const { main, weather: weatherInfo, name, dt } = weather;

  return (
    <div className="weather-container">
      <h2>{name}</h2>
      <p>{moment.unix(dt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
      <div className="weather-info">
        <p>Temperature: {main.temp}°C</p>
        <p>Description: {weatherInfo[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
