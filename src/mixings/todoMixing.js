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
      return this.amount > 0
    }
  }
}
