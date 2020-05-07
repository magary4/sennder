<template>
  <div v-if="null === bets.employer">
    <input v-model="amount" type="number" placeholder="Enter maximum offer" />
    <button v-bind:disabled="!isAmountValid" @click="makeBet(amount)">Submit</button>
  </div>
</template>

<script>
  import TodoMixing from '../mixings/todoMixing'
  import { mapActions } from 'vuex'
  import { EMPLOYER_BET } from '../store/actions';

  export default {
    name: 'EmployerTodo',
    mixins: [ TodoMixing ],
    methods: {
      ...mapActions({makeBet: EMPLOYER_BET})
    }
  }
</script>
