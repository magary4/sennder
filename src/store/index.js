import Vue from 'vue'
import Vuex from 'vuex'
import weatherService from '../services/weather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employerBet: null,
    employeeBet: null,
    weather: null
  },
  getters: {
    betsMade: (state) => null !== state.employerBet && null !== state.employeeBet,
    betsStatus: (state) => state.employerBet > state.employeeBet,
    bets: (state) => ({
      employer: state.employerBet,
      employee: state.employeeBet
    }),
    weather: (state) => state.weather
  },
  mutations: {
    EMPLOYER_BET(state, amount) {
      state.employerBet = amount
    },
    EMPLOYEE_BET(state, amount) {
      state.employeeBet = amount
    },
    SET_WEATHER(state, weatherObj) {
      state.weather = weatherObj
    }
  },
  actions: {
    EMPLOYER_BET(context, amount) {
      context.commit('EMPLOYER_BET', amount)
    },
    EMPLOYEE_BET(context, amount) {
      context.commit('EMPLOYEE_BET', amount)
    },
    async GET_WEATHER(context) {
      let weatherObj;
      try {
        weatherObj = await weatherService().getWeatherForTown()
      } catch (e) {
        console.log(e)
        return
      }
      if (weatherObj.data && Object.keys(weatherObj.data).length) {
        context.commit('SET_WEATHER', weatherObj.data)
      } else {
        console.log("No weather data")
      }
    }
  },
  modules: {
  }
})
