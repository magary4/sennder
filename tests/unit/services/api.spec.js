import axios from "axios";
jest.mock("axios");
axios.get.mockImplementation(() => Promise.resolve({data: {}}));
global.console = {log: jest.fn()}
process.env.VUE_APP_OPEN_WEATHER_API_KEY = 'apikey'

import api from '@/services/api.js'
const apiService = api()

describe('api.js', () => {
  it('api.getWeatherForTown() should work with no params', async () => {
    const data = await apiService.getWeatherForTown();

    expect(axios.get).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining( {params: expect.objectContaining({APPID: "apikey", q: "London", units: "metric"})} )
    )
  })

  it('api.getWeatherForTown() should work with params', async () => {
    const data = await apiService.getWeatherForTown('Lindau');

    expect(axios.get).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining( {params: expect.objectContaining({APPID: "apikey", q: "Lindau", units: "metric"})} )
    )

    expect(data).toMatchObject({})
  })

  it('api.getWeatherForTown() should handle the error case', async () => {
    axios.get.mockImplementation(() => Promise.reject());
    const data = await apiService.getWeatherForTown();

    expect(data).toBe(undefined)
  })
})
