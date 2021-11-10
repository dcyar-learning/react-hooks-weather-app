import React, { useState, useEffect } from 'react'

function ClimaForm({ setWeatherEvent, setErrorEvent }) {
  const [country, setCountry] = useState('arequipa')
  const [input, setInput] = useState('');

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`

  useEffect(() => {
    fetch(URL)
      .then(response => {
        if (response.status >= 400) throw new Error(response.statusText);

        return response.json();
      })
      .then(data => setWeatherEvent(data))
      .catch(err => setErrorEvent(true))
  }, [URL])

  const inputHandler = e => setInput(e.target.value)

  const submitHandler = () => {
    setErrorEvent(false)
    setCountry(input)
  }

  return (
    <>
      <div className="weather--form">
        <input
          onChange={inputHandler}
          value={input}
          type="text"
          placeholder="Enter your country..."
        />
        <button onClick={submitHandler}>Search</button>
      </div>
    </>
  )
}

export default ClimaForm
