import { SET_EMPLOYER_BET, SET_EMPLOYEE_BET } from '../mutations'
import { EMPLOYER_BET, EMPLOYEE_BET } from '../actions'

const state = () => ({
  employerBet: null,
  employeeBet: null
})

const getters = {
  betsMade: (state) => null !== state.employerBet && null !== state.employeeBet,
  betsStatus: (state) => null !== state.employerBet && null !== state.employeeBet && state.employerBet >= state.employeeBet,
  bets: (state) => ({
    employer: state.employerBet,
    employee: state.employeeBet
  }),
}

const mutations = {
  [SET_EMPLOYER_BET](state, amount) {
    state.employerBet = amount
  },
  [SET_EMPLOYEE_BET](state, amount) {
    state.employeeBet = amount
  }
}

const actions = {
  [EMPLOYER_BET](context, amount) {
    context.commit(SET_EMPLOYER_BET, amount)
  },
  [EMPLOYEE_BET](context, amount) {
    context.commit(SET_EMPLOYEE_BET, amount)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
