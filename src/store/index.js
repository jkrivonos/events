import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import events from './events'

const store = new Vuex.Store({
  modules: {
    events
  }
})

export default store