import Vue from 'vue'
import Vuex from 'vuex'
import bidding from './modules/bidding'
import weather from './modules/weather'

Vue.use(Vuex)

const initialState = {}

export default new Vuex.Store({
  state: initialState,
  modules: {
    bidding,
    weather
  }
})
