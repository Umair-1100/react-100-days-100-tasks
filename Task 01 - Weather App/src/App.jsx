import { useEffect, useState } from "react";
import { CloudyIcon } from "./icons";

const API_KEY = "3bb52384179a7425c123eeaa0f3280b1";
const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("lahore");
    const [currentTime, setCurrentTime] = useState("");

  const fetchWeatherData = async (cithName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cithName}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.error(`Error During API Fetch ${error}`);
    }
  };

  useEffect(() => {
    if (!city || city.length < 3) return;
    const timer = setTimeout(() => {
      fetchWeatherData(city);
      console.log(city);      
    }, 2000);
    return () => clearTimeout(timer);
  }, [city]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };


  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // hour & minute formatting
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 => 12

      // day and month
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["Janauary", "Feburary", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

      const dayName = days[now.getDay()];
      const monthName = months[now.getMonth()];
      const date = now.getDate();
      const year = now.getFullYear();

      const formatted = `${hours}:${minutes} ${ampm} , ${dayName} , ${monthName} ${date}, ${year}`;
      setCurrentTime(formatted);
    };

    updateTime(); // initial call
    const timer = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(timer); // cleanup
  }, []);


  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-4xl px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-4 border border-gray-100 shadow-md bg-white rounded-sm p-6">
          {/* <!---- start column ----> */}
          <div className="col-span-12 md:col-span-5">
            <fieldset className="flex items-center justify-center gap-3 mb-6">
              <label htmlFor="">Your City</label>
              <input
                placeholder="Enter City Name"
                type="search"
                className="w-[200px] rounded-sm px-4 py-2 outline-0  text-sm border border-gray-200"
                value={city}
                onChange={handleChange}
              />
            </fieldset>

            <div className="text-2xl text-center pb-4">
              <h2>{weather?.name}</h2>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-500">
             {currentTime}
              {/* Sun Dec 14 2025 18:50:26 GMT+0500 */}
            </div>

            <div className="text-3xl flex items-center justify-center gap-3 py-6">
              <CloudyIcon className={"size-12"} />
              <span>{weather?.main?.temp}°C</span>
            </div>

            <div className="flex items-center justify-evenly">
              <div className="text-center">
                <h3 className="mb-1 text-base text-gray-500">Humidity</h3>
                <h4 className="text-sm">{weather?.main?.humidity}%</h4>
              </div>
              <div className="text-center">
                <h3 className="mb-1 text-base text-gray-500">Wind Speed</h3>
                <h4 className="text-sm">{weather?.wind?.speed} km</h4>
              </div>
            </div>
          </div>
          {/* <!---- end column ----> */}
        </div>
      </div>
    </section>
  );
};

export default App;
