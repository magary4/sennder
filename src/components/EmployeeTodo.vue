<template>
  <div v-if="null === bets.employee">
    <input v-model="amount" type="number" placeholder="Enter minimum salary" />
    <button v-bind:disabled="!isAmountValid" @click="makeBet(amount)">Submit</button>
  </div>
</template>

<script>
  import TodoMixing from '../mixings/todoMixing'
  import { mapActions } from 'vuex';
  import { EMPLOYEE_BET } from '../store/actions';

  export default {
    name: 'EmployeeTodo',
    mixins: [ TodoMixing ],
    methods: {
      ...mapActions({makeBet: EMPLOYEE_BET})
    }
  }
</script>
