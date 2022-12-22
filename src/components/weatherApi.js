import React, { useState } from 'react'
import Card  from './card/Card';
import Form from './form/Form'; 
const WeatherApi = () => {
    let urlWheater = "https://api.openweathermap.org/data/2.5/weather?&appid=f02279685271112911df6a01e739cdff&lang=es";
    let cityUrl = "&q="
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&appid=f02279685271112911df6a01e739cdff&lang=es";
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("")
    const getLocation = async(loc) =>{
        setLoading(true)
        setLocation(loc)
        urlWheater = urlWheater + cityUrl + loc;
        await fetch(urlWheater).then((res)=>{
            if(!res.ok) throw {res}
            return res.json();


        }).then((weatherData) =>{
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        })
        urlForecast = urlForecast + cityUrl + loc;
        await fetch(urlForecast).then((res)=>{
            if(!res.ok) throw {res}
            return res.json();


        }).then((forecastData) =>{
            console.log(forecastData)
            setForecast(forecastData)
            setLoading(false)
            setShow(true)
        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        })
 
    }
    return(
<React.Fragment>
    <Form
    newLocation={getLocation}
    />
    <Card showData={show}
    loadingData = {loading}
    weather = {weather}
    forecast = {forecast}
    />
</React.Fragment>
    );
}
export default WeatherApi;