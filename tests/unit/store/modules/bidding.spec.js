import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '@/store/modules/bidding'
import { SET_EMPLOYER_BET, SET_EMPLOYEE_BET } from '@/store/mutations'

let store

describe('Bidding store', () => {

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(storeConfig)
  })

  it('Bidding store: should be correct inited', () => {
    expect(store.state.employerBet).toEqual(null)
    expect(store.state.employeeBet).toEqual(null)
    expect(store.getters.betsStatus).toBeFalsy()
    expect(store.getters.betsMade).toBeFalsy()
  })

  it('Bidding store: should mutate employer bet correctly', () => {
    store.commit(SET_EMPLOYER_BET, 123)
    expect(store.state.employerBet).toEqual(123)
    expect(store.state.employeeBet).toEqual(null)
    expect(store.getters.betsMade).toBeFalsy()
  })

  it('Bidding store: should mutate employee bet correctly', () => {
    store.commit(SET_EMPLOYEE_BET, 321)
    expect(store.state.employerBet).toEqual(null)
    expect(store.state.employeeBet).toEqual(321)
    expect(store.getters.betsStatus).toBeFalsy()
    expect(store.getters.betsMade).toBeFalsy()
  })

  it('Bidding store: should mutate employee and employer bets correctly', () => {
    store.commit(SET_EMPLOYER_BET, 123)
    store.commit(SET_EMPLOYEE_BET, 321)
    expect(store.getters.betsStatus).toBeFalsy()
    expect(store.getters.betsMade).toBeTruthy()
    store.commit(SET_EMPLOYER_BET, 321)
    store.commit(SET_EMPLOYEE_BET, 123)
    expect(store.getters.betsStatus).toBeTruthy()
  })
})
