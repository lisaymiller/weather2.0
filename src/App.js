import React, { useState } from "react";

const api = {
  key: "8f37b106985fdb90c5024a634d4ca05f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
        });
    }
  };

  const weatherBackground = function () {
    return typeof weather.main != "undefined"
      ? weather.main.temp > 90
        ? "App veryhot"
        : weather.main.temp > 80 && weather.main.temp < 90
        ? "App hot"
        : weather.main.temp > 70 && weather.main.temp < 80
        ? "App warm"
        : weather.main.temp > 60 && weather.main.temp < 70
        ? "App tempid"
        : weather.main.temp > 50 && weather.main.temp < 60
        ? "App cool"
        : weather.main.temp > 40 && weather.main.temp < 50
        ? "App cold"
        : weather.main.temp > 30 && weather.main.temp < 40
        ? "App snowing"
        : weather.main.temp < 30
        ? "App frozen"
        : "App"
      : "App";
  };

  return (
    <div className={weatherBackground()}>
      <main>
        <div className="heading">What's the weather like?</div>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Find out..."
            onFocus={(e) => (e.target.placeholder = "city")}
            onBlur={(e) => (e.target.placeholder = "Find out...")}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
      </main>
    </div>
  );
}

export default App;
