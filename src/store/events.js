import * as eventsApi from  '@/api/events.js'

export default {
  namespaced: true,
  state: {
    events: null,
    selectedEvent: null
  },
  getters: {
    all: state => state.events,
  },
  mutations: {
    setEvents(state, events) {
      state.events = events
    }
  },
  actions: {
    async load({ commit }){
      let response = await eventsApi.all()
      commit('setEvents', response.events)
    },
    addEvent() {

    }
  }
}