import axios from "axios";
import weatherData from "./data/weather.json";

export const fetchData = async () => {
  const token = process.env.WEATHER_API_KEY || "";
  const city = "Seoul";

  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`
  );
  const data = response.data;
  return {
    weather: (<any>weatherData)[data.weather[0].id],
    temp: `(${data.main.temp_min}도 ~ ${data.main.temp_max}도)`,
    wind: `${data.wind.speed}m/s`,
  };
};
