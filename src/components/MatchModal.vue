<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h3>{{ betsStatus ? "SUCCESS" : "FAILURE" }}</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p>Maximum offer was: {{ bets.employer }}</p>
              <p>Minimum expected salary: {{ bets.employee }}</p>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              {{ weather ? 'Current temperature in London is: ' + weather.main.temp + '&deg;' : '' }}
              <br/><br/>
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'MatchModal',
    computed: mapGetters(['betsStatus', 'bets', 'weather']),
    mounted() {
      this.$store.dispatch('GET_WEATHER')
    }
  }
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    font-weight: bold;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
