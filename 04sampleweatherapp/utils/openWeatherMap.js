const API_KEY = '849338767c0e95025b5559533d26b7c4';

const API_URI = 'http://api.openweathermap.org/data/2.5/weather?';

function zipUrl(zip) {
  return `${API_URI}q=${zip}&unites=imperial&APPID=${API_KEY}`;
}

function fetchForecast(zip) {
  return fetch(zipUrl(zip))
    .then(res => res.json())
    .then(resJSON => {
      return {
        main: resJSON.weather[0].main,
        description: resJSON.weather[0].description,
        temp: resJSON.main.temp
      };
    })
    .catch(error => {
      console.error(error);
    });
}

export default { fetchForecast };
