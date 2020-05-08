import { shallowMount, createLocalVue } from '@vue/test-utils'
import EmployeeTodo from '@/components/EmployeeTodo.vue'
import Vuex from 'vuex'
import { SET_EMPLOYEE_BET } from '@/store/actions'
import { nextTick } from "q";

describe('EmployeeTodo.vue', () => {

  let store
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let wrapper;

  it('EmployeeTodo flow should works correctly', async () => {
    const makeBetFunMock = jest.fn()
    store = new Vuex.Store({
      getters: {
        bets: () => ({ employee: null }),
      }
    })

    wrapper = shallowMount(EmployeeTodo, {
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

  it('EmployeeTodo should hide controls if bet has been made', async () => {
    store = new Vuex.Store({
      getters: {
        bets: () => ({ employee: 1 }),
      }
    })

    wrapper = shallowMount(EmployeeTodo, {
      store,
      localVue,
    })

    expect(wrapper.findAll('button').length).toBe(0)
    expect(wrapper.findAll('input').length).toBe(0)
  })
})
