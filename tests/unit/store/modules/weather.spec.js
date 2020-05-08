import api from "../../../../src/services/api"
jest.mock("../../../../src/services/api")

const weatherObj = { city: "Berlin", temp: 20 }
const getWeatherForTownMockFun = jest.fn(() => Promise.resolve(weatherObj))
api.mockImplementation(() => ({ getWeatherForTown: getWeatherForTownMockFun}))

import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '@/store/modules/weather'
import { SET_WEATHER } from '@/store/mutations'
import {GET_WEATHER} from "@/store/actions";

let store

describe('Bidding store', () => {

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(storeConfig)
  })

  it('Weather store: should get weather data', async () => {
    expect(store.state.weather).toEqual(null)
    await store.dispatch(GET_WEATHER)
    expect(getWeatherForTownMockFun).toHaveBeenCalledWith(undefined)
    await store.dispatch(GET_WEATHER, 'Lindau')
    expect(getWeatherForTownMockFun).toHaveBeenCalledWith('Lindau')
    expect(store.state.weather).toMatchObject(weatherObj)
  })

})
