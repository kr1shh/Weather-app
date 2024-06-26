import { useState, useEffect } from "react";
import { Button, Search } from "./components/components";
import axios from "axios";
import Bg from "./assets/background.jpg";
import noData from "/no_data.png";

function App() {
  const apiKey = "cdc97c5e48b002b17247c9a0fd8e7167";
  const [response, setResponse] = useState(null);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  const handleClick = () => {
    if (location) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        )
        .then((res) => {
          setResponse(res.data);
          if (res.data.weather && res.data.weather.length > 0) {
            let weatherIcon = res.data.weather[0].icon;
            setWeather(
              `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`
            );
          } else {
            setWeather(noData);
          }
        })
        .catch((err) => {
          console.log("The error is : ", err);
          alert(err.response.data.message);
        });
    } else {
      return alert("Search for a city");
    }
  };

  useEffect(() => {
    setWeather(noData);
  }, []);

  return (
    <>
      <main className="relative w-full h-screen bg-black flex items-center justify-center">
        <img
          className="absolute z-[0] w-full h-full object-cover opacity-60"
          src={Bg}
        ></img>
        <div className="w-80 h-auto rounded-2xl overflow-hidden ">
          <div className="w-full h-full flex items-center bg-[rgba(255,255,255,.1)]  backdrop-blur-[6px] pt-4 gap-4 flex-col ">
            <div className="w-full flex justify-center gap-2">
              <Search
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
              />
              <Button handleClick={handleClick} />
            </div>
            <div className=" w-1/2 h-36 overflow-hidden rounded-2xl">
              <img
                className="w-full h-full bg-cover"
                src={weather}
                alt="Weather Icon"
              />
            </div>
            <p className="font-montserrat text-white">
              { response ? response.weather[0].description : ''}
            </p>
            <div className="flex flex-col items-center gap-2 mb-4">
              <h3 className="text-white font-montserrat font-bold text-3xl drop-shadow-xl">
                {response ? `${Math.round(response.main.temp)} \u00B0C` : ""}
              </h3>
              <h2 className="text-white font-montserrat font-bold text-lg drop-shadow-xl">
                {response ? response.name : "Search for a city"}
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
