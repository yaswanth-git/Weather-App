import { useEffect, useState } from "react";
import "./App.css";
import Display from "./Display";

function App() {
  const [city, setCity] = useState("");
  const [stat, setStat] = useState(" ");
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=273c1c260de8002f05c085781e4f5b18&units=metric`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if(jsonResponse.cod === 200){
          setStat(jsonResponse);
        }
        else if(jsonResponse.cod === "404" || jsonResponse.cod === "400"){
          setStat({cod:jsonResponse.cod,message:"Please enter a valid city name"});
        }
      })
      .catch((error) => {
        setStat(error);
      });
  }, [city]);
  return (
    <div className="App">
      <div className="heading">
        <h1>Weather App</h1>
      </div>
      <div className="search">
        <div className="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className="input">
          <input type="text" placeholder="Enter city" onKeyDown={(e)=>{
            if(e.keyCode === 13){
              setCity(e.target.value);
            }
          }}/>
        </div>
      </div>

      {
        stat !== " "?
        <>{stat.cod === 200 ? <Display obj={stat} /> : <>{stat.cod == ""?<div></div>:<div className="error">Enter a city name to get the weather</div>}</> }</>
          :
        <div></div>
      }
    </div>
  );
}

export default App;
