import { shallowMount, createLocalVue } from '@vue/test-utils'
import EmployerTodo from '@/components/EmployerTodo.vue'
import Vuex from 'vuex'
import { SET_EMPLOYER_BET } from '@/store/actions'
import { nextTick } from "q";

describe('EmployerTodo.vue', () => {

  let store
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let wrapper;

  it('EmployerTodo flow should works correctly', async () => {
    const makeBetFunMock = jest.fn()
    store = new Vuex.Store({
      getters: {
        bets: () => ({ employer: null }),
      }
    })

    wrapper = shallowMount(EmployerTodo, {
      store,
      localVue,
      methods: {
        makeBet: makeBetFunMock
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findAll('button').length).toBe(1)
    expect(wrapper.findAll('input').length).toBe(1)
    expect(wrapper.find('button').attributes()['disabled']).toBe('disabled')

    const amount = 200
    wrapper.vm.amount = amount
    await nextTick(() => null)

    expect(wrapper.find('button').attributes()['disabled']).toBe(undefined)
    await wrapper.find('button').trigger('click')

    expect(makeBetFunMock).toBeCalledWith(amount)
  })

  it('EmployerTodo should hide controls if bet has been made', async () => {
    store = new Vuex.Store({
      getters: {
        bets: () => ({ employer: 1 }),
      }
    })

    wrapper = shallowMount(EmployerTodo, {
      store,
      localVue,
    })

    expect(wrapper.findAll('button').length).toBe(0)
    expect(wrapper.findAll('input').length).toBe(0)
  })
})
