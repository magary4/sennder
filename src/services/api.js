import axios from 'axios';

export default () => {

  const ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';

  const getWeatherForTown = (town = 'London') => {
    return axios.get(ENDPOINT, {
      params: {
        q: town,
        units: 'metric',
        APPID: process.env.VUE_APP_OPEN_WEATHER_API_KEY
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        // TODO: error handler
        console.log(err)
      });
  }

  return {
    getWeatherForTown
  }
}
