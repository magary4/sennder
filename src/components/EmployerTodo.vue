<template>
  <div v-if="null === bets.employer">
    <input v-model="amount" type="number" placeholder="Enter maximum offer" />
    <button v-bind:disabled="!isAmountValid" @click="makeBet(amount)">Submit</button>
  </div>
</template>

<script>
  import TodoMixing from '../mixings/todoMixing'
  export default {
    name: 'EmployerTodo',
    mixins: [ TodoMixing ],
    methods: {
      makeBet(amount) {
        this.$store.dispatch('EMPLOYER_BET', amount)
      }
    }
  }
</script>
