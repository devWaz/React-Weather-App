import { useState } from "react";

const api = {
    key: "c026713c36dfb2de015fc84d94e5be17",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const link = {image: "https://openweathermap.org/img/wn/"}

function Main(){
    const [query , setQuery] = useState('');
    const [weather , setWeather] = useState({});
    
    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setQuery('');
                console.log(data);
            });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January" , "Februaury" , "March" , "April" , "May" , "June" , "July" , "August" , "September" ,
                        "October" , "November" , "December"];
        let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date}, ${month} ${year}`
    }

    return (

        <div className={ (typeof weather.main != "undefined") ? 
        ((weather.main.temp > 16) ? 
        "App warm" : 
        "App") 
            : "App"
        }>
            <main>
            <div className='search'>
            <input 
                type="text"
                className="search-bar"
                placeholder="Search City, Country"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}/>
            </div>

            {(typeof weather.main != "undefined") ? (
            <div className="container">
                <div className="location-box">
                    <div className="location">{weather.name} , {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>

            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°C
                    <div className="weather">
                        {weather.weather[0].main}
                        <img src={`${link.image}${weather.weather[0].icon}.png`} alt="" />
                        </div>
                </div> 
            </div>

            <div className="otherDetails">
                <div className="humidity"><h1>Humidity: {weather.main.humidity} Ha</h1></div>
                <div className="seaLevel"><h1>Sea Level: {weather.main.sea_level}</h1></div>
            </div>
            </div>
            ) : (
                <div className="ERROR">
                    <h1>Your search result couldn't be found! Try a new search</h1>
                </div>
            )}
        </main>
        </div>

    )
}


export default Main;