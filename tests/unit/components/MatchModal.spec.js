import { shallowMount, createLocalVue } from '@vue/test-utils'
import MatchModal from '@/components/MatchModal.vue'
import Vuex from 'vuex'
import { GET_WEATHER } from '@/store/actions'

describe('MatchModal.vue', () => {

  let actions
  let getters
  let store

  const localVue = createLocalVue()
  localVue.use(Vuex)
  let wrapper;

  beforeAll(() => {

    actions = {
      [GET_WEATHER]: jest.fn()
    }

    getters = {
      bets: () => ({ employer: 300, employee: 200 }),
      betsStatus: () => true,
      weather: () => null
    }

    store = new Vuex.Store({
      getters,
      actions
    })

    wrapper = shallowMount(MatchModal, {
      store,
      localVue
    })
  })

  it('MatchModal should displays correct info', () => {
    expect(wrapper.exists()).toBe(true)
    const header_text = wrapper.find('.modal-header')
    expect(header_text.text()).toBe('SUCCESS')
    const modal_body = wrapper.find('.modal-body')
    expect(modal_body.text()).toContain('Maximum offer was: 300')
    expect(modal_body.text()).toContain('Minimum expected salary: 200')
  })
})

