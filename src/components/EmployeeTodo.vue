<template>
  <div v-if="null === bets.employee">
    <input v-model="amount" type="number" placeholder="Enter minimum salary" />
    <button v-bind:disabled="!isAmountValid" @click="makeBet(amount)">Submit</button>
  </div>
</template>

<script>
  import TodoMixing from '../mixings/todoMixing'
  export default {
    name: 'EmployeeTodo',
    mixins: [ TodoMixing ],
    methods: {
      makeBet(amount) {
        this.$store.dispatch('EMPLOYEE_BET', amount)
      }
    }
  }
</script>
