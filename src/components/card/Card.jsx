import React from 'react'
import Spinner  from '../Spinner'
import City from '../assets/city.jpg'
const Card = ({loadingData, showData, weather}) => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = day + '/' + month + '/' + year;
  let url = "";
  let iconUrl = "";
  if(loadingData){
    return <Spinner/>  }
    if(showData){
      url = "http://openweathermap.org/img/w/";
      iconUrl = url + weather.weather[0].icon + ".png"
    
  }
  
  return (
    <div className='mt-5'>
      {showData === true ? (
        <div className='container'>
          <div className='card mb-3 mx-auto text-light'>
            <div className='row g-0'>
              <div className='col-md-4'>
  <h3 className='card-title'>{weather.name}</h3>
  <p className='card-date'>{date}</p>
  <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
  <p className='card-desc'>
  <img src={iconUrl} alt="icon" />{weather.weather[0].description}
  </p>
<img src={City} alt="cloud" className='img-fluid rounded-start'  />
              </div>
 <div className='col-md-8'>
  <div className='card-body text-start mt0-2'>
    <h5 className='card-text'>Temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
    <h5 className='card-text'>Temperatura maxima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
    <h5 className='card-text'>Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
    <h5 className='card-text'>Humedad: {weather.main.humidity}%</h5>

  </div>
 
 </div>
            </div>
          </div>
        </div>
      ):( <h2 className='texto'>Hey, antes de salir de casa, mira que tal esta el tiempo...</h2>)}
    </div>
  )
}

export default Card
