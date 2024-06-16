// LocationInput.js

import React, { useState } from 'react';
import './LocationInput.css'; // Import LocationInput component CSS

const LocationInput = ({ setCity }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="submit-button">Search</button>
    </form>
  );
};

export default LocationInput;
