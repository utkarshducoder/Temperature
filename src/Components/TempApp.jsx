import React, { useEffect, useState } from "react";
import "./css/style.css";


const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=31a20ce6705d856ca44e9fd9405c9920`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
    };
    fetchApi();
  }, [search]); // Add search as a dependency to useEffect

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="info">
          <h2 className="location">{city && city.name}</h2>
          <i class="fa-solid fa-street-view"></i>
          <h1 className="temp">
            {city && city.main && city.main.temp}°C
          </h1>
          <h3 className="tempmin_max">
            Min: {city && city.main && city.main.temp_min}°C | Max:{" "}
            {city && city.main && city.main.temp_max}°C
          </h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </>
  );
};

export default TempApp;
