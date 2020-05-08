import { shallowMount, createLocalVue } from '@vue/test-utils'
import Container from '@/components/Container.vue'
import Vuex from 'vuex'
import { SET_EMPLOYER_BET } from '@/store/actions'
import { nextTick } from "q";

describe('Container.vue', () => {

  let store
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let wrapper;

  it('Container should switch between components', async () => {
    store = new Vuex.Store({
      getters: {
        bets: () => ({ employer: null }),
        betsMade: () => false
      }
    })

    wrapper = shallowMount(Container, {
      store,
      localVue
    })

    expect(wrapper.exists()).toBe(true)

    const employerLink = wrapper.find('.employer-link')
    const employeeLink = wrapper.find('.employee-link')

    expect(employerLink.element.classList.contains('active')).toBe(true)
    expect(employeeLink.element.classList.contains('active')).toBe(false)
    expect(wrapper.find('.employer-todo').exists()).toBeTruthy()
    expect(wrapper.find('.employee-todo').exists()).toBeFalsy()

    employeeLink.trigger('click')
    await nextTick(() => null)

    expect(employerLink.element.classList.contains('active')).toBe(false)
    expect(employeeLink.element.classList.contains('active')).toBe(true)
    expect(wrapper.find('.employer-todo').exists()).toBeFalsy()
    expect(wrapper.find('.employee-todo').exists()).toBeTruthy()

    expect(wrapper.find('.match-modal').exists()).toBeFalsy()
  })

  it('Container should show modal', async () => {
    store = new Vuex.Store({
      getters: {
        betsMade: () => true
      }
    })

    wrapper = shallowMount(Container, {
      store,
      localVue,
    })

    expect(wrapper.exists()).toBe(true)
    wrapper.vm.showMatchModal = true;
    await nextTick(() => null)
    expect(wrapper.find('.match-modal').exists()).toBeTruthy()
    wrapper.vm.showMatchModal = false;
    await nextTick(() => null)
    expect(wrapper.find('.match-modal').exists()).toBeFalsy()
  })
})
