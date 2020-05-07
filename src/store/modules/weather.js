import { SET_WEATHER } from '../mutations'
import { GET_WEATHER } from '../actions'
import api from '../../services/api'

const state = () => ({
  weather: null
})

const getters = {
  weather: (state) => state.weather
}

const mutations = {
  [SET_WEATHER](state, weatherObj) {
    state.weather = weatherObj
  }
}

const actions = {
  async [GET_WEATHER](context) {
    const weatherObj = await api().getWeatherForTown()
    if (null !== weatherObj && Object.keys(weatherObj).length) {
      context.commit('SET_WEATHER', weatherObj)
    } else {
      console.log('No weather data')
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
