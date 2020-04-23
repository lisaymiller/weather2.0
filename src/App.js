import React, { useState } from "react";

const api = {
  key: "8f37b106985fdb90c5024a634d4ca05f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // const [query, setQuery] = useState("");
  // const [weather, setWeather] = useState({});

  // const search = (evt) => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setQuery("");
  //         setWeather(result);
  //       });
  //   }
  // };

  // const dateTime = new Date().toLocaleDateString();

  return (
    <div className="App">
      <main>
        <div className="heading">What's the weather like?</div>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Find out..."
            // onChange={(e) => setQuery(e.target.value)}
            // value={query}
            // onKeyPress={search}
          ></input>
        </div>
        {/* <div className="today">{this.state.dateTime}</div> */}
        <div className="city">Charlotte</div>
        <div className="temp">something°</div>
        <dic className="descript">Looking gloomy</dic>
      </main>
    </div>
  );
}

export default App;
