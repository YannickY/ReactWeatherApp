import { useState, useEffect } from 'react';
import "./React.css"


export default function App() {
const [city, setCity] = useState("houston");
const [weathers, setWeather] = useState([]);
const [cityInput, changeCityInput] = useState("");

let key = 0;


useEffect(() => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a261e8b391febbe8a8f940f7fb4d2709`)
  .then((res) => res.json())
  .then((json) => {
    setWeather([json]);
  } )

}, [city]);

console.log(weathers);

function submit(e) {
  e.preventDefault();
  setCity(cityInput);

}

function userInput(e) {
  changeCityInput(e.target.value);

}




return (
  <div>
   

    {weathers.map(weathering => 
    <div key={key++}>
      <h1>{weathering.name}</h1>
      <h4>Weather: {weathering.weather[0].main}</h4>
      <h4>Temperature: {(weathering.main.temp - 273) * 1.8 + 32}</h4>
      <h4>Feels like: {(weathering.main["feels_like"] - 273) * 1.8 +32}</h4>
      <h4>Humidity: {weathering.main.humidity}</h4>
      </div>
    )}
  
    

    <form onSubmit={submit}>
      <input onChange={userInput} />
      <button type="submit">Search by City or State</button>
    </form>
  </div>
)


}