import { useState } from 'react'

import Clima from './components/Clima';
import ClimaForm from './components/ClimaForm';
import './App.css';

function App() {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false)

  const setWeatherHandler = (data) => {
    setWeather(data)
  }

  const setErrorHandler = (data) => {
    setError(data)
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <ClimaForm setWeatherEvent={setWeatherHandler} setErrorEvent={setErrorHandler} />
      <Clima weather={weather} error={error} />
    </div>
  );
}

export default App;
