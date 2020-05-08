<template>
  <div>
    <div>
      <a href="#" class="employer-link" v-bind:class="{active: TAB_EMPLOYER === tabIndex}" @click="toggleTab(0)" >Employer-Todo</a>
      &nbsp;&nbsp;&nbsp;
      <a href="#" class="employee-link" v-bind:class="{active: TAB_EMPLOYEE === tabIndex}" @click="toggleTab(1)" >Employee-Todo</a>
    </div>
    <br/><br/><br/>
    <div>
      <employer-todo class="employer-todo" v-if="TAB_EMPLOYER === tabIndex"></employer-todo>
      <employee-todo class="employee-todo" v-if="TAB_EMPLOYEE === tabIndex"></employee-todo>
    </div>
    <match-modal class="match-modal" v-if="showMatchModal" @close="showMatchModal = false"></match-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import EmployerTodo from '../components/EmployerTodo.vue'
  import EmployeeTodo from '../components/EmployeeTodo.vue'
  import MatchModal from '../components/MatchModal.vue'

  export default {
    name: 'Container',
    components: {
      EmployerTodo,
      EmployeeTodo,
      MatchModal
    },
    data() {
      return {
        TAB_EMPLOYER: 0,
        TAB_EMPLOYEE: 1,
        tabIndex: 0,
        showMatchModal: false
      }
    },
    computed: mapGetters(['betsMade', 'betsStatus', 'bets']),
    watch: {
      betsMade() { this.showMatchModal = true }
    },
    methods: {
      toggleTab(tabIndex) {
        this.tabIndex = tabIndex
      }
    }
  }
</script>
