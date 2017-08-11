import axios from 'axios';

const API_KEY = '92b24b072bc8369b8cc4cf335f569c8e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
