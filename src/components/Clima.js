import React from 'react'

function Clima({ weather, error }) {
  return (
    <>
      {error ? <p>An error has occurred, the city you entered may not exist, please try again.</p> : <section>
        <h2>{weather.name}</h2>
        {weather.weather && <img
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].icon}
        ></img>}

        <p>{weather.main?.temp}</p>
      </section>}
    </>
  )
}

export default Clima
