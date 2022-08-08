import { useState } from "react";

const api = {
    key: "c026713c36dfb2de015fc84d94e5be17",
    base: "https://api.openweathermap.org/data/2.5/"
  }


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
        <main>
        <div className='search'>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search Country"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
            <div className="location">Lagos , NG</div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
            <div className="temp">
                15*c
            </div>
            <div className="weather">
                Sunny
            </div>
        </div>
      </main>

    )
}


export default Main;