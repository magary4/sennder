import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      amount: null
    }
  },
  computed: {
    ...mapGetters(['bets']),
    isAmountValid() {
      if (! /^\d+$/.test(this.amount)) {
        return false
      }
      return this.amount > 0
    }
  },
  watch: {
    amount: function (newValue) {
      this.amount = parseInt(newValue)
    }
  }
}
